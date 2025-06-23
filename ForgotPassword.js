import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password Reset Request for:", email);
  };

  return (
    <div className="form-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">Send Reset Link</button>
      </form>
      <p>
        Remember your password?{" "}
        <Link to="/login" style={{ color: "#dc3545" }}>
          Login
        </Link>
      </p>
    </div>
  );
}

export default ForgotPassword;
