import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
const TopBar = () => {
  return (
    <div className="tiobar-top">
      <div className="topbar">
        <img src="https://i.ibb.co/FBRXbHX/249-removebg-preview.png" alt="" />
        <div>
          <Link to="/">Home </Link>
          <Link to="/blog">Blog </Link>
          <a
            id="about-me-button"
            // style={{ textDecoration: "none", paddingLeft: "7px" }}
            href="#about"
          >
            About Me
          </a>
          <Link to="/website">Website </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
