import React, { useEffect, useRef, useState } from 'react';
import { BiCheckDouble } from 'react-icons/bi';
import { FaAngleDown } from 'react-icons/fa';
import { GoSmiley } from 'react-icons/go';

const Message = ({ children, index }) => {
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
    <div
      className={`flex ${
        index % 2 === 0 ? 'justify-start' : 'justify-end'
      } mb-3`}
    >
      <div
        className={`flex ${
          index % 2 === 0 ? ' flex-row-reverse' : ' flex-row'
        } items-end`}
      >
        <GoSmiley
          className={`${index % 2 === 0 ? 'ml-1' : 'mr-1'} hidden group`}
        />
        <div className="flex items-end border border-[#ccc] p-2 opacity-[0.8] bg-white rounded w-[160px] md:w-[400px] relative group">
          <div className="absolute top-3 right-3 " ref={dropdownRef}>
            <FaAngleDown
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                isOpen ? '' : 'hidden'
              } group-hover:block bg-white w-[15px] h-[15px] rounded-[50%] shadow cursor-pointer`}
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
                    Forward
                  </a>
                  <a
                    href="/logout"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Reply
                  </a>
                  <a
                    href="/logout"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Delete
                  </a>
                </div>
              </div>
            )}
          </div>
          <p className={`w-[100%] mb-[15px] break-words`}>
            {children}
            <span className="text-[8px] flex items-center min-w-[50px]text-[10px] absolute bottom-[5px] right-[5px]">
              01:30 PM
              {index % 2 !== 0 && (
                <BiCheckDouble color="blue" size={18} className="ml-1" />
              )}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
