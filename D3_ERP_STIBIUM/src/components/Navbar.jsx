// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Employee Dashboard</h1>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/team" className="nav-link">Team</Link>
        <Link to="/add" className="nav-link">Add Member</Link>
      </div>
    </nav>
  );
}
