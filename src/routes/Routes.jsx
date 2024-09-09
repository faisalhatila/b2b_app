import React from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import AuthLayout from '../components/Layout/AuthLayout';
import MainLayout from '../components/Layout/MainLayout';
import Auth from '../pages/Auth/Auth';
import Home from '../pages/Home/Home';
import Categories from '../pages/Categories/Categories';
import Products from '../pages/Products/Products';
import Orders from '../pages/Orders/Orders';
import Settings from '../pages/Settings/Settings';
import Messages from '../pages/Messages/Messages1';

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Auth />} />
      <Route path="/home" element={<Home />} /> */}
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Auth />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="settings" element={<Settings />} />
        <Route path="messages" element={<Messages />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
