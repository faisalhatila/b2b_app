// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Nav/Sidebar';
import TopNav from '../Nav/TopNav';

const MainLayout = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/assets/images/background.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // backgroundColor: 'rgba(0, 0, 0,0.5)',
      }}
    >
      <Sidebar />
      <div className="ml-20 mt-5 min-h-[100vh]">
        <TopNav />
        <main className="pt-16 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
