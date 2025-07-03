import React, { useState, useEffect } from 'react';
import { FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';

const AdminHeader = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const getInitials = (name) => {
    if (!name) return '';
    return name.charAt(0).toUpperCase();
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b">
      {/* Search bar */}
      <div className="relative w-96">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-12 pr-4 py-2.5 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-200"
        />
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-6">
        <button className="relative text-gray-500 hover:text-gray-700">
          <FiBell className="h-6 w-6" />
        </button>
        
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-500 border-2 border-white ring-2 ring-orange-200">
            {getInitials(username)}
          </div>
          <span className="font-semibold text-gray-700">Hi, {username}</span>
          <FiChevronDown className="text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;