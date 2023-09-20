import "./Navbar.scss";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLinkClick = () => {
    setShowNavbar(false);
  };

  return (
    <nav className='Navbar'>
      <div className="Navbar-container">
        <Link to="/">
          <img
            src={logo}
            alt="Icone de la page accueil"
            className="Navbar-logo-sahra"
          />
        </Link>

        {/* Updated: Show burger menu icon based on showNavbar state */}
        <div className={`Navbar-menu-burger ${showNavbar ? "active" : ""}`} onClick={handleShowNavbar}>
          <FiMenu />
        </div>

        {/* Updated: Show navigation links based on showNavbar state */}
        <div className={`Navbar-links ${showNavbar ? "active" : ""}`}>
          <Link
            to="/a-propos"
            className="Navbar-link"
            onClick={handleLinkClick}
          >
            A PROPOS
          </Link>
          <Link to="/projets" className="Navbar-link" onClick={handleLinkClick}>
            PROJETS
          </Link>
          <Link to="/contact" className="Navbar-link" onClick={handleLinkClick}>
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
