import React from "react";
import Button from "./Button";

export default function TrabajosImg1({
  titulo,
  span,
  parrafo,
  src1,
  src2,
  link,
  claseContainer,
  claseImg,
}) {
  return (
    <div className={claseContainer}>
      <div className="proyects-texto">
        <h3>
          {titulo} <span>{span}</span>
        </h3>
        <p>{parrafo}</p>
        <Button link={link} />
      </div>
      <div className={claseImg}>
        <img className="proyect-mobile" src={src1} alt="" />
        <img className="proyect-desktop" src={src2} />
      </div>
    </div>
  );
}