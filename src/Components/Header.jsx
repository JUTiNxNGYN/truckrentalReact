import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="../Assets/logo.png" alt="Car Rental Logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/cars">Cars</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;