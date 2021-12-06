import React from "react";

export default function Boton({ link, texto }) {
  return (
    <>
      <a href={link} target="_blank">
        <button className="button">{texto}</button>
      </a>
    </>
  );
}
