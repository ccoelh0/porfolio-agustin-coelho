import React from "react";
import Typewriter from "typewriter-effect";

export default function Portada() {
  return (
    <>
      <div className="main" id="main">
        <h2 className="main-h2">Bienvenido </h2>
        <h1 className="main-h1">a mi porfolio</h1>
        {/* <h1 className="main-h1">
          porfolio */}
        {/* <Typewriter
            options={{
              strings: [" porfolio"],
              autoStart: true,
              pauseFor: 5000,
              loop: true,
            }}
          /> */}
        {/* </h1> */}
        {/* <p className="main-p">
          ¡Hola! ¿cómo estás?
          <br />
          Mi nombre es Agustín y soy front-end developer
        </p>
        <button
          className="button"
          style={{
            marginTop: 20,
          }}
          onClick={() => window.location.replace("/#sobreMi")}
        >
          Ver porfolio
        </button> */}
      </div>
    </>
  );
}
