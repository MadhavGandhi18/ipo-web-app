// src/layouts/AdminLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import AdminHeader from '../components/header';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <AdminHeader />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
