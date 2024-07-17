import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/mcmaster">McMaster</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
