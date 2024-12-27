import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navBar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <img
              src="/favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Main</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/article" className="nav-link">Article</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;