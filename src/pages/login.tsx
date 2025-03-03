import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css"; // Common styles for login and registration

const Login: React.FC = () => {
  const [input, setInput] = useState({ emailOrPhone: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", input);
    navigate("/"); // Redirect to homepage after login
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="emailOrPhone" placeholder="Email or Phone" value={input.emailOrPhone} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={input.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <span onClick={() => navigate("/register")}>Sign up</span></p>
    </div>
  );
};

export default Login;
