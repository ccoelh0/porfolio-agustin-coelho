import React, { useState } from "react";

// import Burger from "/images/hamburger.png";
// import Close from "/images/close.png";
// import Logo from "/images/logo.png";

export default function Nav() {
  const [state, setState] = useState({ toggle: false });

  function menuToggle() {
    setState({ toggle: !state.toggle });
  }

  const { toggle } = state;
  return (
    <>
      <header className="menu">
        <div className="menuResponsive">
          {/* <img
            onClick={() => window.location.replace("/#portada")}
            src={Logo}
            style={{ margin: 10, width: 100, cursor: "pointer" }}
            className="logoResponsive"
          /> */}
          {/* <img src={Burger} onClick={menuToggle} className="menuOpen" /> */}
          <ul className={toggle ? "toggle" : ""}>
            <li onClick={() => window.location.replace("/#sobreMi")}>
              Sobre mi
            </li>
            <li onClick={() => window.location.replace("/#skills")}>
              Habilidades
            </li>
            <li onClick={() => window.location.replace("/#trabajos")}>
              Trabajos
            </li>
            <li onClick={() => window.location.replace("/#contacto")}>
              Contacto
            </li>
            {/* <img
              src={Close}
              width="20"
              onClick={menuToggle}
              className="menuClose"
              alt="cierre menu"
            /> */}
          </ul>
        </div>
        <nav>
          <ul>
            <li onClick={() => window.location.replace("/#sobreMi")}>
              Sobre mi
            </li>
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
