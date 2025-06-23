import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Registration.css";

function Registration() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">Register</button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login" style={{ color: "#007bff" }}>
          Login here
        </Link>
      </p>
    </div>
  );
}

export default Registration;
