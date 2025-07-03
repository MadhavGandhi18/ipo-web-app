// src/components/QuickLinks.js
import React from 'react';

const links = [
  {
    name: 'NSE India',
    url: 'https://www.nseindia.com',
    icon: 'https://companieslogo.com/img/orig/NSEI.NS-ba080319.png?t=1633232931',
    bgColor: 'bg-red-100',
  },
  {
    name: 'BSE India',
    url: 'https://www.bseindia.com',
    icon: 'https://companieslogo.com/img/orig/BSE.NS-65423c1c.png?t=1603273767',
    bgColor: 'bg-blue-100',
  },
  {
    name: 'SEBI',
    url: 'https://www.sebi.gov.in',
    icon: 'https://upload.wikimedia.org/wikipedia/en/3/3f/SEBI_logo.svg',
    bgColor: 'bg-indigo-100',
  },
  {
    name: 'Money Control',
    url: 'https://www.moneycontrol.com',
    icon: 'https://seeklogo.com/images/M/moneycontrol-logo-B5B212944C-seeklogo.com.png',
    bgColor: 'bg-sky-100',
  },
];

const QuickLinks = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 h-full">
      <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
      <p className="text-sm text-gray-500 mb-6">Adipiscing elit, sed do eiusmod tempor</p>

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
