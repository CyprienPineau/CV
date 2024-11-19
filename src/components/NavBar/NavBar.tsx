import { Link, useLocation } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <Link className="navbar-button" to="/">
        <div>Accueil</div>
        <div
          className={
            pathname === "/" ? "navbar-button-cursor" : "navbar-button-nocursor"
          }
        />
      </Link>
      <Link className="navbar-button" to="/CV">
        <div>CV</div>
        <div
          className={
            pathname.includes("CV")
              ? "navbar-button-cursor"
              : "navbar-button-nocursor"
          }
        />
      </Link>
      <Link className="navbar-button" to="/Portefolio">
        <div>Portefolio</div>
        <div
          className={
            pathname.includes("Portefolio")
              ? "navbar-button-cursor"
              : "navbar-button-nocursor"
          }
        />
      </Link>
    </nav>
  );
};
export default NavBar;
