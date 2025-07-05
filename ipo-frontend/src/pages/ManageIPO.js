import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiTrash2, FiEye } from 'react-icons/fi';

const ManageIPO = () => {
  const [ipos, setIpos] = useState([]);

  useEffect(() => {
    const fetchIPOs = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/ipo/');
        setIpos(response.data);
      } catch (error) {
        console.error('Error fetching IPOs:', error);
      }
    };

    fetchIPOs();
  }, []);

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'ongoing':
        return 'bg-green-100 text-green-800';
      case 'coming':
        return 'bg-yellow-100 text-yellow-800';
      case 'new listed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Upcoming IPO | Dashboard</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">Register IPO</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Band</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Open</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Close</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue Size</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Listing Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
              <tbody>
                {ipos.map((ipo) => (
                  <tr key={ipo.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full object-cover" src={ipo.logo} alt={`${ipo.company_name} logo`} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{ipo.company_name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ipo.price_band}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ipo.open_date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ipo.close_date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ipo.issue_size} Cr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ipo.issue_type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ipo.listing_date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(ipo.status)}`}>
                        {ipo.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-4">
                        <button className="bg-indigo-600 text-white px-4 py-1 rounded-md hover:bg-indigo-700 text-xs font-semibold">Update</button>
                        <button className="text-red-500 hover:text-red-700"><FiTrash2 className="w-5 h-5" /></button>
                        <button className="text-indigo-500 hover:text-indigo-700"><FiEye className="w-5 h-5" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
      </div>
    </div>
  );
};

export default ManageIPO;
