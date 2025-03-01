import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Records from "./pages/records";
import Analysis from "./pages/analysis";
import Budgets from "./pages/budgets";
import Accounts from "./pages/accounts";
import Categories from "./pages/categories";
import Profile from "./pages/profile";
import ContactUs from "./pages/contact";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="p-4 overflow-auto">
            <Routes>
              <Route path="/" element={<Records />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/budgets" element={<Budgets />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
