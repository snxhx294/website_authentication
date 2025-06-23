import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="submit-button">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/register" style={{ color: "#28a745" }}>
          Register
        </Link>
      </p>
      <p>
        <Link to="/forgot-password" style={{ color: "#28a745" }}>
          Forgot Password?
        </Link>
      </p>
    </div>
  );
}

export default Login;
