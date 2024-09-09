// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaTags,
  FaBoxOpen,
  FaShoppingCart,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';
import { FaRegMessage } from 'react-icons/fa6';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { name: 'Dashboard', icon: <FaTachometerAlt />, path: '/home' },
    { name: 'Categories', icon: <FaTags />, path: '/categories' },
    { name: 'Products', icon: <FaBoxOpen />, path: '/products' },
    { name: 'Orders', icon: <FaShoppingCart />, path: '/orders' },
    { name: 'Settings', icon: <FaCog />, path: '/settings' },
    {
      name: 'Messages',
      icon: <FaRegMessage color="cyan" />,
      path: '/messages',
    },
  ];

  return (
    <div
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] ${
        isOpen ? 'w-64' : 'w-16'
      } transition-all duration-300 in-expo out-expo bg-gray-800 z-10`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="h-full flex flex-col justify-between p-4 space-y-4">
        <div>
          {menuItems.map((item) => (
            <li key={item.name} className="w-full mb-2">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center p-2 text-white ${
                    isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                  } rounded-md`
                }
              >
                {item.icon}
                <span className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>
                  {item.name}
                </span>
              </NavLink>
            </li>
          ))}
        </div>
        <li className="w-full">
          <button
            className="flex items-center p-2 text-white hover:bg-gray-700 rounded-md w-full"
            onClick={() => {
              // Handle logout functionality here
              console.log('Logging out...');
            }}
          >
            <FaSignOutAlt />
            <span className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>
              Logout
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
