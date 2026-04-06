import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">

        <NavLink className="navbar-brand fw-bold" to="/">
          Rabia Solutions
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-bold" : "")
                }
              >
                HOME
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-bold" : "")
                }
              >
                ABOUT US
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-bold" : "")
                }
              >
                SERVICES
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-bold" : "")
                }
              >
                OUR TEAM
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-bold" : "")
                }
              >
                CONTACT US
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar