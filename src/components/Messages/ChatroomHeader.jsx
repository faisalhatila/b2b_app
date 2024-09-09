import React, { useEffect, useRef, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';

const ChatroomHeader = () => {
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
    <div className="border-b-[1px] border-b-[#ccc] px-3 py-2 flex justify-between items-center">
      <div className="flex items-end">
        <div className="flex justify-center items-center w-[35px] h-[35px] rounded-[50%] shadow bg-[#ccc] mr-2 relative">
          <FaUser size={20} color="#eee" />
          <span className="bg-[green] w-[8px] h-[8px] rounded-[50%] absolute right-[2px] bottom-0"></span>
        </div>
        <div>
          <p className="font-bold text-[18px] mb-0 leading-4">Test client 1</p>
          <p className="font-light text-[12px] leading-4">Active</p>
        </div>
      </div>
      <div className="relative" ref={dropdownRef}>
        <HiDotsVertical
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none cursor-pointer"
        />
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
  );
};

export default ChatroomHeader;
