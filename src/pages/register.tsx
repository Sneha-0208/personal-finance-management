import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css"; // Common styles for login and registration

const Register: React.FC = () => {
  const [input, setInput] = useState({
    name: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration Data:", input);
    navigate("/login"); // Redirect to login after signup
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={input.name} onChange={handleChange} required />
        <select name="gender" value={input.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input type="text" name="phone" placeholder="Phone Number" value={input.phone} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={input.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={input.password} onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <span onClick={() => navigate("/login")}>Login</span></p>
    </div>
  );
};

export default Register;
