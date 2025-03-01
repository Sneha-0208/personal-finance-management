import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Finance Manager</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/records" className="hover:underline">Records</Link>
          </li>
          <li>
            <Link to="/analysis" className="hover:underline">Analysis</Link>
          </li>
          <li>
            <Link to="/budgets" className="hover:underline">Budgets</Link>
          </li>
          <li>
            <Link to="/accounts" className="hover:underline">Accounts</Link>
          </li>
          <li>
            <Link to="/categories" className="hover:underline">Categories</Link>
          </li>
          <li>
            <Link to="/profile" className="hover:underline">Profile</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
