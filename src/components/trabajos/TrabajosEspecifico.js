import React from "react";
import Boton from "../boton/Boton";

export default function TrabajosImg1({
  titulo,
  span,
  parrafo,
  src1,
  src2,
  link,
  claseContainer,
  claseImg,
  texto,
}) {
  return (
    <div className={claseContainer}>
      <div className="proyects-texto">
        <div className="proyects-texto-titulos">
          <h3>{titulo}</h3>
          <span>{span}</span>
        </div>

        <p>{parrafo}</p>
        <Boton link={link} texto={texto} />
      </div>
      <div className={claseImg}>
        <img className="proyect-mobile" src={src1} alt={titulo} />
        <img className="proyect-desktop" src={src2} />
      </div>
    </div>
  );
}
