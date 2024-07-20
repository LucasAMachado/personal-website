import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
    <nav className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <p className="text-black hover:bg-gray-100 px-3 py-2 rounded-sm text-sm font-medium">
                Lucas Machado
              </p>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-sm text-sm font-medium ${
                    isActive(link.to)
                      ? "bg-gray-100 text-black"
                      : "text-black hover:bg-gray-100"
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-3 py-2 rounded-sm text-sm font-medium bg-gray-50 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
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
              ) : (
                <p>Menu</p>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex justify-between items-center p-4">
            <Link
              to="/"
              className="flex-shrink-0"
              onClick={() => setIsOpen(false)}
            >
              {isOpen ? (
                <></>
              ) : (
                <p className="text-black hover:bg-gray-100 px-3 py-2 rounded-sm text-sm font-medium">
                  Lucas Machado
                </p>
              )}
              
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-sm text-sm font-medium bg-gray-50 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
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
          <div className="flex flex-col items-center flex-grow">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center justify-between px-3 py-4 rounded-sm text-lg  w-[calc(100%-2rem)] hover:bg-gray-100 mb-4"
                onClick={() => setIsOpen(false)}
              >
                <span>{link.text}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
