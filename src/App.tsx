import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer"; // Import Footer
import Records from "./pages/records";
import Analysis from "./pages/analysis";
import Budgets from "./pages/budgets";
import Accounts from "./pages/accounts";
import Categories from "./pages/categories";
import Profile from "./pages/profile";
import ContactUs from "./pages/contact";
import TermsOfService from "./pages/terms";
import PrivacyPolicy from "./pages/privacy";
import "./App.css";

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  return (
    <Router>
      <div className="flex h-screen flex-col">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div className="flex-1 flex flex-col">
          {/* Hide Navbar when Sidebar is open */}
          {!isSidebarOpen && <Navbar />}
          <div className="p-4 overflow-auto flex-grow">
            <Routes>
              <Route path="/" element={<Records />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/budgets" element={<Budgets />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
