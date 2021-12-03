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
        <h3>
          {titulo} <span>{span}</span>
        </h3>
        <p>{parrafo}</p>
        <Boton link={link} texto={texto} />
      </div>
      <div className={claseImg}>
        <img className="proyect-mobile" src={src1} alt="" />
        <img className="proyect-desktop" src={src2} />
      </div>
    </div>
  );
}
