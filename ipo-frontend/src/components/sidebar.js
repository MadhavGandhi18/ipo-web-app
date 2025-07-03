import React from 'react';
import {
  FiGrid,
  FiShoppingCart,
  FiFileText,
  FiSettings,
  FiHelpCircle,
  FiKey,
  FiUser,
} from 'react-icons/fi';
import { BsFillBriefcaseFill } from 'react-icons/bs';

const Sidebar = () => {
  const activeLink = 'Dashboard';

  const navItems = {
    menu: [
      { name: 'Dashboard', icon: FiGrid, href: '/admin/dashboard' },
      { name: 'Manage IPO', icon: FiShoppingCart, href: '#' },
      { name: 'IPO Subscription', icon: FiFileText, href: '#' },
      { name: 'IPO Allotment', icon: FiFileText, href: '#' },
    ],
    others: [
      { name: 'Settings', icon: FiSettings, href: '#' },
      { name: 'API Manager', icon: FiKey, href: '#' },
      { name: 'Accounts', icon: FiUser, href: '#' },
      { name: 'Help', icon: FiHelpCircle, href: '#' },
    ],
  };

  const NavLink = ({ item }) => (
    <a
      href={item.href}
      className={`flex items-center p-3 rounded-lg transition-colors text-sm ${
        activeLink === item.name
          ? 'bg-blue-50 text-blue-600'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <item.icon className="w-5 h-5 mr-4" />
      <span className="font-medium">{item.name}</span>
    </a>
  );

  return (
    <aside className="h-screen w-72 bg-white p-6 flex flex-col border-r">
      <div className="flex items-center space-x-3 mb-12">
        <div className="bg-blue-600 p-2 rounded-lg">
          <BsFillBriefcaseFill className="text-white h-5 w-5" />
        </div>
        <h1 className="text-xl font-bold text-gray-800">Bluestock Fintech</h1>
      </div>

      <div className="flex-grow">
        <h2 className="text-xs text-gray-400 uppercase tracking-widest mb-4 px-3">Menu</h2>
        <nav className="space-y-1">
          {navItems.menu.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </nav>

        <div className="mt-8">
          <h2 className="text-xs text-gray-400 uppercase tracking-widest mb-4 px-3">Others</h2>
          <nav className="space-y-1">
            {navItems.others.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </nav>
        </div>
      </div>

      <footer className="text-xs text-gray-400 mt-8">&copy; 2025 Bluestock</footer>
    </aside>
  );
};

export default Sidebar;