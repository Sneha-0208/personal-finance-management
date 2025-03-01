import React from "react";
import { Link } from "react-router-dom";
import { Home, PieChart, CreditCard, List, User, Settings } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-5 fixed">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/records" className="flex items-center space-x-2 hover:text-blue-400">
            <Home size={20} /> <span>Records</span>
          </Link>
        </li>
        <li>
          <Link to="/analysis" className="flex items-center space-x-2 hover:text-blue-400">
            <PieChart size={20} /> <span>Analysis</span>
          </Link>
        </li>
        <li>
          <Link to="/budgets" className="flex items-center space-x-2 hover:text-blue-400">
            <CreditCard size={20} /> <span>Budgets</span>
          </Link>
        </li>
        <li>
          <Link to="/accounts" className="flex items-center space-x-2 hover:text-blue-400">
            <List size={20} /> <span>Accounts</span>
          </Link>
        </li>
        <li>
          <Link to="/profile" className="flex items-center space-x-2 hover:text-blue-400">
            <User size={20} /> <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/settings" className="flex items-center space-x-2 hover:text-blue-400">
            <Settings size={20} /> <span>Settings</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
