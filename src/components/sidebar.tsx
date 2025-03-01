import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, PieChart, CreditCard, List, User, Settings, Menu, X } from "lucide-react";
import "./sidebar.css";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Hamburger Icon (Only Show When Sidebar is Closed) */}
      {!isOpen && (
        <button className="sidebar-toggle" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      )}

      <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">Dashboard</h2>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <ul className="sidebar-menu">
          <li>
            <Link to="/records">
              <Home size={20} /> <span>Records</span>
            </Link>
          </li>
          <li>
            <Link to="/analysis">
              <PieChart size={20} /> <span>Analysis</span>
            </Link>
          </li>
          <li>
            <Link to="/budgets">
              <CreditCard size={20} /> <span>Budgets</span>
            </Link>
          </li>
          <li>
            <Link to="/accounts">
              <List size={20} /> <span>Accounts</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <User size={20} /> <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <Settings size={20} /> <span>Settings</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
