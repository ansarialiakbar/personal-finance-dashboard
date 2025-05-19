import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  CalendarIcon,
  PieChartIcon,
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/', icon: <HomeIcon size={20} /> },
  { name: 'Calendar Tracker', path: '/calendar', icon: <CalendarIcon size={20} /> },
  { name: 'Budget Assistant', path: '/budget', icon: <PieChartIcon size={20} /> },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-8">💰 FinTrack</h1>
      <nav className="flex flex-col gap-4">
        {navItems.map(({ name, path, icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-white'
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
              }`
            }
          >
            {icon}
            {name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
