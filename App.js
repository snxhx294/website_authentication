import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import "./App.css";

function Home() {
  return (
    <div className="homepage">
      <h1>Welcome to the Authentication System</h1>
      <div className="buttons-container">
        <Link to="/register">
          <button className="nav-button">Register</button>
        </Link>
        <Link to="/login">
          <button className="nav-button">Login</button>
        </Link>
        <Link to="/forgot-password">
          <button className="nav-button">Forgot Password</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
