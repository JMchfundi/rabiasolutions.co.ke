import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="w-100 d-flex justify-content-between align-items-center">

        {/* Logo + Brand */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src={logo} 
            alt="Rabia Solutions Logo" 
            width="40" 
            height="40" 
            className="me-2"
          />
        </NavLink>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link">HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">ABOUT US</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link">SERVICES</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/team" className="nav-link">OUR TEAM</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">CONTACT US</NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;