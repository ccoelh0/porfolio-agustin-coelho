import React from "react";

import Burger from "../../images/hamburger.png";
import Close from "../../images/close.png";
import Logo from "../../images/logo.png";

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
            <li onClick={() => window.location.replace("/#sobreMi")}>
              Sobre mi
            </li>
            <li onClick={() => window.location.replace("/#skills")}>
              Habilidades
            </li>
            <img
              onClick={() => window.location.replace("/#portada")}
              src={Logo}
              style={{ margin: 10, width: 100, cursor: "pointer" }}
            />
            <li onClick={() => window.location.replace("/#trabajos")}>
              Trabajos
            </li>
            <li onClick={() => window.location.replace("/#contacto")}>
              Contacto
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
