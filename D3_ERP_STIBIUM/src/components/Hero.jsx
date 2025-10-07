// src/components/Hero.jsx
import React from "react";
import "./Hero.css"; // Import the CSS file

export default function Hero() {
  return (
    <section className="hero">
      <h2 className="hero-title">Welcome to the Employee Dashboard</h2>
      <p className="hero-text">
        Manage your team, view profiles, and add new employees — all built with React & Tailwind.
      </p>
      <a href="#profiles" className="hero-button">
        View Team
      </a>
    </section>
  );
}
