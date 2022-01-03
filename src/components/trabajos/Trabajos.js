import React from "react";
import TrabajosEspecificos from "./TrabajosEspecifico";
import trabajos from "../../data/trabajos.json";

export default function Trabajos() {
  const proyect1 = `proyects1`;
  const proyect2 = `proyects2`;

  const contenedorImg1 = `proyects-contenedorImg1`;
  const contenedorImg2 = `proyects-contenedorImg2`;

  const proyects = trabajos;

  return (
    <>
      <div className="proyectContainer" id="trabajos">
        <h2 className="proyect-titleGral">
          Mis <span>trabajos</span>
        </h2>
        {proyects.map((p, index) => {
          return (
            <TrabajosEspecificos
              key={index}
              titulo={p.titulo}
              span={p.span}
              parrafo={p.parrafo}
              src1={p.img1}
              src2={p.img2}
              link={p.link}
              claseContainer={p.claseContainer}
              claseImg={p.claseImg}
              texto={`Ver repositorio`}
            />
          );
        })}
      </div>
    </>
  );
}
