import React from "react";
import ReactDOM from "react-dom/client";
import logo from './images/logo.jpg';
import searchIcon from './images/search_icon.png';
import userIcon from './images/user_icon.webp';

const Header = () => (
  <header className="header">
    <img className="logo" src={logo} alt="logo" />

    <div className="search-bar">
      <input
        type="text"
        placeholder="Search anything you want..."
      />
      <img className="search-icon" src={searchIcon} alt="search icon" />
    </div>

    <img className="user-icon" src={userIcon} alt="user icon" />
  </header>
  
  
);

console.log("Logo:", logo);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
