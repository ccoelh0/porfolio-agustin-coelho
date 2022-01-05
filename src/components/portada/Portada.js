import React from "react";
import Typewriter from "typewriter-effect";

export default function Portada() {
  return (
    <>
      <div className="main" id="main">
        <div className="main-contenedor">
          <h1>
            Bienvenido
            <br />a mi porfolio
            <span>.</span>
          </h1>
          <p>
            Soy front-end developer enfocado en{" "}
            <span className="borderEffect">Javascript</span> y{" "}
            <span className="borderEffect">React.</span>
            <br />
            Me interesa mucho crear sitios atractivos y experiencias de usuario
            dinámicas
          </p>
        </div>
      </div>
    </>
  );
}
