import React from "react";
import imgPortada from "../../images/portada.svg";

export default function Portada() {
  return (
    <>
      <div className="grid">
        <div className="main">
          <div className="main-content">
            <h2>
              Bienvenido
              <br /> a mi
              <span> porfolio!</span>
            </h2>
          </div>
        </div>
        <div className="main-img"></div>
      </div>
    </>
  );
}
