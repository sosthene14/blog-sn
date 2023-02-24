import React from "react";
import { useState } from "react";

function NavBar() {
  const [showLinks, SetShowLinks] = useState(false);
  const handleShowLinks = () => {
    SetShowLinks(!showLinks);
  };
  return (
    <div className="wrapper">
      <nav className={showLinks ? "show-nav" : "hide-nav"}>
        <button className="navbar-burger" onClick={handleShowLinks}>
          <span className="burger-line"></span>
        </button>
        <div className="content" id="content">
          <ul className="links">
            <li>
              <a
                href="/"
                id={window.location.pathname === "/" ? "active-link" : ""}
              >
                Acceuil
              </a>
            </li>
            <li>
              <a href="#" className="desktop-link">
                Categories
              </a>
              <label htmlFor="show-features">Features</label>
              <ul>
                <li>
                  <a
                    href="/Categorie/Business"
                    id={
                      window.location.pathname === "/Categorie/Business"
                        ? "active-link"
                        : ""
                    }
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/Categorie/Divertissement"
                    id={
                      window.location.pathname === "/Categorie/Divertissement"
                        ? "active-link"
                        : ""
                    }
                  >
                    Divertissement
                  </a>
                </li>
                <li>
                  <a
                    href="/Categorie/Sante"
                    id={
                      window.location.pathname === "/Categorie/Sante"
                        ? "active-link"
                        : ""
                    }
                  >
                    Sante
                  </a>
                </li>
                <li>
                  <a
                    href="/Categorie/Science"
                    id={
                      window.location.pathname === "/Categorie/Science"
                        ? "active-link"
                        : ""
                    }
                  >
                    Science
                  </a>
                </li>
                <li>
                  <a
                    href="/Categorie/Sport"
                    id={
                      window.location.pathname === "/Categorie/Sport"
                        ? "active-link"
                        : ""
                    }
                  >
                    Sport
                  </a>
                </li>
                <li>
                  <a
                    href="/Categorie/Technologie"
                    id={
                      window.location.pathname === "/Categorie/Technologie"
                        ? "active-link"
                        : ""
                    }
                  >
                    Thechnologie
                  </a>
                </li>
                <li>
             
                </li>
           
              </ul>
              <div className="links-on-mobile">
              <li>
                  <a
                    href="/Categorie/Business"
                    id={
                      window.location.pathname === "/Categorie/Business"
                        ? "active-link"
                        : ""
                    }
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/Categorie/Divertissement"
                    id={
                      window.location.pathname === "/Categorie/Divertissement"
                        ? "active-link"
                        : ""
                    }
                  >
                    Divertissement
                  </a>
                </li>
                <li>
                  <a
                    href="/Categorie/Sante"
                    id={
                      window.location.pathname === "/Categorie/Sante"
                        ? "active-link"
                        : ""
                    }
                  >
                    Sante
                  </a>
                </li>
                <li>
                  <a
                    href="/Categorie/Science"
                    id={
                      window.location.pathname === "/Categorie/Science"
                        ? "active-link"
                        : ""
                    }
                  >
                    Science
                  </a>
                </li>
                <li>
                  <a
                    href="/Categorie/Sport"
                    id={
                      window.location.pathname === "/Categorie/Sport"
                        ? "active-link"
                        : ""
                    }
                  >
                    Sport
                  </a>
                </li>
                <li>
                  <a
                    href="/Categorie/Thechnologie"
                    id={
                      window.location.pathname === "/Categorie/Technologie"
                        ? "active-link"
                        : ""
                    }
                  >
                    Thechnologie
                  </a>
                </li>
                <li>
             
                </li>
              </div>
            </li>
            <li>
              <a
                href="/Contact"
                id={window.location.pathname === "/Contact" ? "active-link" : ""}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
