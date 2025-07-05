// src/components/QuickLinks.js
import React from 'react';

const links = [
  {
    name: 'NSE India',
    url: 'https://www.nseindia.com',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLHjt7DhJ_CxHkTnHVrsuK8eeV_RHUTv5Sqg&s',
    bgColor: 'bg-red-100',
  },
  {
    name: 'BSE India',
    url: 'https://www.bseindia.com',
    icon: 'https://play-lh.googleusercontent.com/Z5g_hTkFi6lmhfY11_OmqxsCAVLbALuE8y1IkhfqW-eP4kNIWb3_w6dqvSoLUiHx5C9E',
    bgColor: 'bg-blue-100',
  },
  {
    name: 'SEBI',
    url: 'https://www.sebi.gov.in',
    icon: 'https://www.paisabazaar.com/wp-content/uploads/2017/11/SEBI-Reduce-Fund-Schemes.jpg',
    bgColor: 'bg-indigo-100',
  },
  {
    name: 'Money Control',
    url: 'https://www.moneycontrol.com',
    icon: 'https://cdn-1.webcatalog.io/catalog/moneycontrol/moneycontrol-social-preview.png?v=1748824532732',
    bgColor: 'bg-sky-100',
  },
];

const QuickLinks = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 h-full">
      <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
      <p className="text-sm text-gray-500 mb-6">I give it my all at the same time.</p>

      <ul className="space-y-3">
        {links.map((link, idx) => (
          <li key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${link.bgColor} shadow-sm`}>
                <img src={link.icon} alt={`${link.name} logo`} className="w-6 h-6 object-contain" />
              </div>
              <span className="text-sm font-semibold text-gray-700">{link.name}</span>
            </div>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              Visit Now
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
