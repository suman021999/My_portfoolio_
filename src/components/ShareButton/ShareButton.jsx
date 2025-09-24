"use client";
import { useState } from "react";
import {
  FaShare,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";

const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const shareLinks = [
    {
      icon: <FaGithub className="text-gray-800" />,
      color: "hover:bg-gray-100",
    },
    {
      icon: <FaTwitter className="text-blue-400" />,
      color: "hover:bg-blue-50",
    },
    {
      icon: <FaFileAlt className="text-amber-600" />,
      color: "hover:bg-amber-50",
      label: "Resume",
    },
    {
      icon: <FaLinkedin className="text-blue-700" />,
      color: "hover:bg-blue-100",
    },
  ];

  return (
    <>
      <div className="relative group">
        {/* Main Share Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center 
                 hover:bg-gray-50 transition-all duration-300 z-10 relative"
        >
          <FaShare
            className={`text-gray-600 transition-transform ${
              isOpen ? "rotate-45" : ""
            }`}
          />
        </button>

        {/* Circular Share Options */}
        <div
          className={`absolute top-0 left-0 transition-all duration-500 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {shareLinks.map((link, index) => (
            <button
              key={index}
              className={`absolute w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center
                      transition-all duration-300 ${link.color} ${
                link.label ? "has-tooltip" : ""
              }`}
              style={{
                transform: isOpen
                  ? `translate(
                    calc(cos(${index * 90 * (Math.PI / 180)}) * 3.5rem), 
                    calc(sin(${index * 90 * (Math.PI / 180)}) * 3.5rem)
                  )`
                  : "translate(0, 0)",
                transitionDelay: isOpen ? `${index * 75}ms` : "0ms",
              }}
              aria-label={link.label || undefined}
            >
              {link.icon}
              {link.label && (
                <span
                  className="tooltip absolute right-full mx-2 ml-2 top-1/2 -translate-y-1/2 
                   px-2 py-1 text-xs text-white bg-gray-800 rounded whitespace-nowrap shadow"
                >
                  {link.label}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShareButton;
