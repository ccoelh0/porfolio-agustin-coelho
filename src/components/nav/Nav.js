import React from "react";

import Wp from "../../images/whatsapp.png";
import Burger from "../../images/hamburger.png";
import Close from "../../images/close.png";

export default function Nav() {
  return (
    <>
      <div className="botonWp">
        <a>
          <img src={Wp} />
        </a>
      </div>
      <header className="menu">
        <div>
          <img src={Burger} id="menuOpen" />
          <img src={Close} id="menuClose" className="displayNone" />
        </div>
        <h1>Agustin Coelho</h1>
      </header>
      <nav>
        <ul id="menuNavBar" className="displayNone menu-navBar">
          <li>About me</li>
          <li>Jobs</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}
