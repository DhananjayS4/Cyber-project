import React from "react";
import "./Header.css"; 

const Header = () => {
  return (
    <header className="header">
      <h1>Cyber Security Dashboard</h1>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
