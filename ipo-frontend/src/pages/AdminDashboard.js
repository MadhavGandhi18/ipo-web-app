// src/pages/AdminDashboard.js
import React from 'react';
import Sidebar from '../components/sidebar';
import AdminHeader from '../components/header';
import IPOStats from '../components/IPOStats';
import QuickLinks from '../components/QuickLinks';
import DonutChart from '../components/DonutChart';

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <AdminHeader />

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <IPOStats />
          <QuickLinks />
          <DonutChart />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
