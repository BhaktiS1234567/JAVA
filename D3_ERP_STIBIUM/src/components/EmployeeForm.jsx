import React, { useState } from "react";
import "../index.css"; // make sure your styles are loaded

export default function EmployeeForm() {
  const [form, setForm] = useState({ name: "", role: "", email: "" });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) {
      setSubmitted({ success: false, message: "Please fill all required fields." });
      return;
    }
    setSubmitted({ success: true, message: `${form.name} added successfully!` });
    setForm({ name: "", role: "", email: "" });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add New Employee</h2>

      {submitted && (
        <div className={`form-alert ${submitted.success ? "success" : "error"}`}>
          {submitted.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-row">
          <label>
            Name<span>*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter employee name"
          />
        </div>

        <div className="form-row">
          <label>
            Role<span>*</span>
          </label>
          <input
            type="text"
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Enter role (e.g. Frontend Engineer)"
          />
        </div>

        <div className="form-row">
          <label>
            Email<span>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email address"
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-submit">
            Save Employee
          </button>
          <button
            type="button"
            onClick={() => setForm({ name: "", role: "", email: "" })}
            className="btn-reset"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
