import React, { useState } from "react";
import "./contact.css";

const ContactUs: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", category: "Query", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      {submitted ? (
        <p className="success-message">Thank you for reaching out! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />

          <label>Category</label>
          <select name="category" value={form.category} onChange={handleChange} required>
            <option value="Query">Query</option>
            <option value="Feature Request">Feature Request</option>
            <option value="Complaint">Complaint</option>
            <option value="Other">Other</option>
          </select>

          <label>Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} required></textarea>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
