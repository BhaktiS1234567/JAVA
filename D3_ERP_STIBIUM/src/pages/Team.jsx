import React from "react";
import employees from "../data/employees";

export default function Team() {
  return (
    <div className="team-container">
      <h1 className="team-title">Our Team</h1>

      <table className="employee-table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>
                <img
                  src={emp.avatar}
                  alt={emp.name}
                  className="employee-photo"
                />
              </td>
              <td>{emp.name}</td>
              <td>{emp.role}</td>
              <td>{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
