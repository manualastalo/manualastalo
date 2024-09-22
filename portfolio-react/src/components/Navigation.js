import React from "react";

function Navigation() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      id="mainNav"
      style={{ backgroundColor: "#212529" }}
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Valikko
          <i className="fas fa-bars ms-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase mx-auto py-4 py-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/index.html">
                Etusivu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/omattuotokset.html">
                Omat työt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
