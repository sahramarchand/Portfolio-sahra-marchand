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

  return (
    <nav className="Navbar">
        <div className="Navbar-container">
        <Link to="/">
        <img
          src={logo}
          alt="Icone de la page accueil"
          className="Navbar-logo-sahra"
        />
      </Link>

      <div className="Navbar-menu-burger" onClick={handleShowNavbar}>
        <FiMenu />
      </div>

      <div className={`Navbar-links  ${showNavbar && "active"}`}>
          <Link to="/a-propos" className="Navbar-link">
            A PROPOS
          </Link>
          <Link to="/projets" className="Navbar-link">
            PROJETS
          </Link>
          <Link to="/contact" className="Navbar-link">
            CONTACT
          </Link>
        </div>
        </div>
    </nav>
  );
}
export default Navbar;
