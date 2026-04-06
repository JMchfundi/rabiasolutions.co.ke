// src/components/Navbar.js
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import logo from "../assets/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
  const navRef = useRef(null); // reference to collapse div

  // Function to collapse navbar on link click
  const handleNavLinkClick = () => {
    const collapseEl = navRef.current;
    if (collapseEl.classList.contains("show")) {
      // Bootstrap Collapse API
      const bsCollapse = window.bootstrap.Collapse.getInstance(collapseEl);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow" style={{ zIndex: 2000 }}>
      <div className="container-fluid">
        {/* Logo + Brand */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Rabia Solutions Logo" width="40" height="40" className="me-2" />
          Rabia Solutions
        </NavLink>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav" ref={navRef}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink onClick={handleNavLinkClick} to="/" end className="nav-link text-dark me-3">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleNavLinkClick} to="/about" className="nav-link text-dark me-3">
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleNavLinkClick} to="/services" className="nav-link text-dark me-3">
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleNavLinkClick} to="/team" className="nav-link text-dark me-3">
                OUR TEAM
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleNavLinkClick} to="/contact" className="nav-link text-dark">
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;