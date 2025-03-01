import React, { useState } from "react";

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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      {submitted ? (
        <p className="text-green-500">Thank you for reaching out! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md">
          <label className="block mt-2">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />

          <label className="block mt-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />

          <label className="block mt-2">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          >
            <option value="Query">Query</option>
            <option value="Feature Request">Feature Request</option>
            <option value="Complaint">Complaint</option>
            <option value="Other">Other</option>
          </select>

          <label className="block mt-2">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          ></textarea>

          <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
