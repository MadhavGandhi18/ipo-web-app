// src/pages/AdminDashboard.js
import React from 'react';
import IPOStats from '../components/IPOStats';
import QuickLinks from '../components/QuickLinks';
import DonutChart from '../components/DonutChart';

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <IPOStats />
      <QuickLinks />
      <DonutChart />
    </div>
  );
};

export default AdminDashboard;
