import React, { useState } from "react";
import ProfilePhoto from "/profilePhoto.webp";
import Resume from "/Resume.webp";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-sm text-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-6 bg-gray-50">
          <h1 className="text-2xl font-sm">Contact Information</h1>
          <button
            onClick={onClose}
            className="hover:bg-gray-200 px-2 py-2  ml-auto rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6 overflow-y-auto flex-grow">
          <div>
            <a
              href="mailto:lucas.machado.professional@gmail.com"
              className="font-sm"
            >
              Email:{" "}
              <span className="underline font-sm">
                lucas.machado.professional@gmail.com
              </span>{" "}
            </a>
            <br />
            <a href="tel:+15196705889" className="font-sm">
              Phone CAD <span className="underline font-sm">519-670-5889</span>
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/lucas-machado-509817291/?trk=public-profile-join-page"
              className="font-sm"
            >
              LinkedIn: <span className="underline font-sm">Lucas Machado</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Resume.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-sm text-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-6 bg-gray-50">
          <button
            onClick={onClose}
            className="hover:bg-gray-200 px-2 py-2  ml-auto rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6 overflow-y-auto flex-grow">
          <img src={Resume} alt="Resume" className="w-full h-auto" />
        </div>
        <div className="p-6 bg-gray-100 flex justify-end">
          <button
            className="px-3 py-2 rounded-sm text-sm font-medium bg-gray-200 hover:bg-gray-300 transition duration-300"
            onClick={handleDownload}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12 bg-white text-black">
      <div className="flex flex-col w-full justify-center items-center lg:flex-row lg:items-stretch space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="w-full lg:w-1/2">
          <img
            src={ProfilePhoto}
            alt="Lucas Machado"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
          <h1 className="text-5xl font-extrabold dark:text-white">
            Lucas Machado
            <small className="block mt-2 text-2xl font-semibold text-gray-500 dark:text-gray-400">
              Engineering Bach. Comp Sci
            </small>
          </h1>

          <div className="flex flex-row justify-center space-y-2 text-lg w-full"></div>
          <div className="flex flex-row items-center justify-center sm:space-y-0 sm:space-x-4">
            <button
              className="w-1/2 bg-gray-50 hover:bg-gray-100 text-sm font-medium text-black px-3 py-4 rounded-md transition duration-300"
              onClick={() => setIsContactOpen(true)}
            >
              Contact Now
            </button>
            <button
              className="w-1/2 bg-slate-950 hover:bg-slate-800 text-sm font-medium text-white px-3 py-4 rounded-md transition duration-300"
              onClick={() => setIsResumeOpen(true)}
            >
              View Resume
            </button>
          </div>
        </div>
      </div>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default Profile;
