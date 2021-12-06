import React from "react";
import Typewriter from "typewriter-effect";

export default function Portada() {
  return (
    <>
      <div className="main">
        <h2>Bienvenido a mi</h2>
        <h1>
          <Typewriter
            options={{
              strings: [" porfolio"],
              autoStart: true,
              pauseFor: 5000,
              loop: true,
            }}
          />
        </h1>
        <p>
          ¡Hola! ¿cómo estás?
          <br />
          Mi nombre es Agustín y soy front-end developer
        </p>
        <button
          className="button"
          style={{
            marginTop: 20,
          }}
          onClick={() => window.location.replace("/#trabajos")}
        >
          Ver porfolio
        </button>
      </div>
    </>
  );
}
