import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Employee Dashboard</h1>
       <p className="home-description">
        The Employee Dashboard helps you manage and monitor your team efficiently. 
        You can view employee details, roles, and contact information all in one place. 
        Use this platform to add new team members, update existing profiles, and keep 
        your organization data organized and accessible.
      </p>

    </div>
  );
}


// src/pages/Home.jsx
/*import React from "react";
import "./Home.css"; // Import your CSS file

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Employee Dashboard</h1>
    </div>
  );
}*/
