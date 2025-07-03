// src/components/IPOStats.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiArrowUp } from 'react-icons/fi';

const IPOStats = () => {
  const [ipoList, setIpoList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/ipo/')
      .then(response => {
        setIpoList(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching IPO data:", error);
        setLoading(false);
      });
  }, []);

  const totalIPOs = ipoList.length;
  const ipoInGain = ipoList.filter(ipo => ipo.listing_gain > 0).length;
  const ipoInLoss = ipoList.filter(ipo => ipo.listing_gain < 0).length;

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl border border-gray-200 h-full flex items-center justify-center">
        <p className="text-gray-500">Loading IPO Stats...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 h-full flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800">IPO Dashboard India</h3>
      <p className="text-sm text-green-500 font-medium mt-1 flex items-center">
        <FiArrowUp className="mr-1 h-4 w-4" />
        <span>{ipoInGain} IPO in Gain</span>
      </p>

      <div className="flex-grow flex items-center justify-center mt-4">
        <div className="relative w-[340px] h-60">
          {/* IPO in Loss Circle */}
          <div className="absolute top-0 left-4 w-32 h-32 rounded-full bg-purple-500 text-white flex items-center justify-center shadow-lg ring-4 ring-white">
            <div className="text-center">
              <p className="text-3xl font-bold">{ipoInLoss}</p>
              <p className="text-xs opacity-80">IPO in Loss</p>
            </div>
          </div>

          {/* IPO in Gain Circle */}
          <div className="absolute bottom-0 left-12 w-40 h-40 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow-lg ring-4 ring-white z-10">
            <div className="text-center">
              <p className="text-4xl font-bold">{ipoInGain}</p>
              <p className="text-sm opacity-80">IPO in Gain</p>
            </div>
          </div>

          {/* Total IPO Circle */}
          <div className="absolute top-4 right-0 w-48 h-48 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-xl ring-4 ring-white">
            <div className="text-center">
              <p className="text-5xl font-bold">{totalIPOs}</p>
              <p className="text-sm opacity-80">Total IPO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPOStats;
