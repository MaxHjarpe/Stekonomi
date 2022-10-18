import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            STEKONOMI
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={handleClick}>
                Hem
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Budget"
                className="nav-links"
                onClick={handleClick}
              >
                Budget
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Login" className="nav-links" onClick={handleClick}>
                Logga in
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;