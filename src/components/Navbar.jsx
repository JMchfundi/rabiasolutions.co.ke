import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow">
      <div className="container-fluid">
        
        {/* Logo + Brand */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src={logo} 
            alt="Rabia Solutions Logo" 
            width="40" 
            height="40" 
            className="me-5"  // Bootstrap margin-end
          />
          Rabia Solutions
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
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link text-dark me-3">HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link text-dark me-3">ABOUT US</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link text-dark me-3">SERVICES</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/team" className="nav-link text-dark me-3">OUR TEAM</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link text-dark">CONTACT US</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;