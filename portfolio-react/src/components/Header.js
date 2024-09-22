import React from "react";

function Header() {
  return (
    <header className="masthead">
      <div className="container">
        <div className="masthead-subheading"></div>
        <div className="masthead-heading">Manu Alastalo - blogi</div>
        <a
          className="btn btn-primary btn-xl text-uppercase me-sm-3 my-3"
          href="#portfolio"
        >
          Tietoja minusta
        </a>
        <a
          className="btn btn-secondary btn-xl text-uppercase"
          href="#yhteystiedot"
        >
          Yhteystiedot
        </a>
      </div>
    </header>
  );
}

export default Header;
