// src/components/TopNav.jsx
import React, { useEffect, useRef, useState } from 'react';
import { FaBell } from 'react-icons/fa';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-gray-900 flex items-center justify-between px-4 z-10">
      <div className="text-white text-xl">Logo</div>
      <div className="flex items-center space-x-4">
        <div className="relative mr-[20px]">
          <FaBell color="#fff" size={25} />
          <span className="absolute top-[-10px] right-[-15px] bg-red-700 rounded-[50%] min-w-[25px] h-[25px] text-white flex justify-center items-center text-[12px] font-bold px-1">
            <span className="relative flex items-center">
              9<span className="text-[8px]">+</span>
            </span>
          </span>
        </div>
        <span className="text-white">Username</span>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </button>
          {isOpen && (
            <div
              className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 transition transform origin-top-right ${
                isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
              style={{ transitionDuration: '150ms' }}
            >
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="/settings"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  role="menuitem"
                >
                  Settings
                </a>
                <a
                  href="/logout"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  role="menuitem"
                >
                  Logout
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
