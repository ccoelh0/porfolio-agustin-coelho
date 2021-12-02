import React from "react";

import Burger from "../../images/hamburger.png";
import Close from "../../images/close.png";

export default function Nav() {
  return (
    <>
      <header className="menu">
        <div>
          <img src={Burger} id="menuOpen" />
          <img src={Close} id="menuClose" />
        </div>
        <nav>
          <ul>
            <li>Habilidades</li>
            <li>Trabajos</li>
            <li>Sobre mi</li>
            <li>Contacto</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
