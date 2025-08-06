import React from "react";
import logoImg from "../assets/logo.jpg";

const Navigaion = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logoImg} alt="logo" width="80" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navigaion;
