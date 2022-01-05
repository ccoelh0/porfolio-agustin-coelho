import React from "react";
import SkillsTags from "../skillstags/SkillsTags";

const SobreMi = () => {
  return (
    <div className="sobreMiGral">
      <div>
        <h3 style={{ textAlign: "center" }}>
          Un poco <span>sobre mi</span>
        </h3>
      </div>
      <div className="sobreMi" id="sobreMi">
        <div className="sobreMi-contenido">
          <p>
            Soy front-end developer enfocado en JavaScript y React. Me interesa
            mucho crear sitios atractivos y experiencias de usuario dinámicas.
            <br />
            <br />
            Disfruto trabajando en equipo y estoy constantemente tratando de
            incorporar nuevos conocimientos: actualmente estoy centrado en
            aprender NodeJs para trabajar con backend.
            <br />
            <br />
            Tengo experiencia trabajando en proyectos freelances y como tutor de
            Desarrollo Web y React Js en{" "}
            <a
              style={{ textDecoration: "none", color: "#080808" }}
              href="https://www.coderhouse.com/"
            >
              Coderhouse
            </a>
          </p>
        </div>
        <div className="sobreMi-foto">
          <SkillsTags />
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
