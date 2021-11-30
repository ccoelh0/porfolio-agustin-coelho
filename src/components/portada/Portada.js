import React from "react";
import Typewriter from "typewriter-effect";

export default function Portada() {
  return (
    <>
      <div className="grid">
        <div className="main">
          <div className="main-content">
            <p>{"<h1>"}</p>
            <h2>
              Hola,
              <br />
              bienvenido a mi
              <br />
              <span>
                <Typewriter
                  options={{
                    strings: ["porfolio"],
                    autoStart: true,
                    pauseFor: 5000,
                    loop: true,
                  }}
                />
              </span>
            </h2>
            <p>{"</h1>"}</p>
          </div>
        </div>
        <div className="main-img"></div>
      </div>
    </>
  );
}
