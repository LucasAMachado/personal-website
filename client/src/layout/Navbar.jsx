import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import McMasterLogo from "../assets/Mac_Logo.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/blog", text: "Blog" },
    { to: "/resume", text: "Resume" },
    { to: "/contact", text: "Contact" },
    { to: "/mcmaster", text: "McMaster" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-300 fixed top-10 w-11/12 lg:w-3/4 mx-auto ">
      <div className="max-w-6xl mx-auto ">
        <div className="flex justify-between items-center">
          {/* Logo (only visible on mobile) */}
          <div className="md:hidden">
            <Link
              to="/"
              className="flex items-center h-12 ml-3  text-slate-950 hover:text-gray-900"
            >
              <img src={McMasterLogo} alt="McMaster Logo" width={30} />
              <span className="font-bold text-slate-950 ml-3 text-xl ">
                Lucas Machado
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex justify-between w-full">
            <div className="flex space-x-4 ">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center justify-center py-2 px-4 text-slate-950 hover:bg-gray-400 hover:text-gray-900  transition duration-200 h-12 ${
                    isActive(link.to) ? "bg-gray-400 text-gray-900" : ""
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
            <div className="flex space-x-4">
              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center justify-center py-2 px-4 text-slate-950 hover:bg-gray-400 hover:text-gray-900 transition duration-200 h-12${
                    isActive(link.to) ? "bg-gray-400 text-gray-900" : ""
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden mr-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              width="32" // Adjust width
              height="32" // Adjust height
              onClick={() => setIsOpen(!isOpen)}
            >
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block py-2 px-4 text-slate-950 hover:bg-gray-400 hover:text-gray-900  transition duration-200 ${
                isActive(link.to) ? "bg-gray-400 text-gray-900" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
