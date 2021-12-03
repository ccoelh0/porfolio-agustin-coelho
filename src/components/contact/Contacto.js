import React from "react";
import Boton from "../boton/Boton";

export default function Contacto() {
  return (
    <form>
      <div className="form-info" id="contacto">
        <h3>¿Tenes un proyecto?</h3>
        <h4>Hablemos!</h4>
        <p>
          Estoy interesado en todo tiempo de trabajos freelances o en empresas.
          No obstante, si tenes cualquier otra consulta no dudes en enviarme un
          mensaje!
        </p>
      </div>

      <div className="form-contacto">
        <input placeholder=" Nombre" />
        <input placeholder=" Mail" />
        <input placeholder=" Asunto" />
        <textarea placeholder=" Mensaje"></textarea>
        <Boton texto={`Enviar mensaje`} />
      </div>
    </form>
  );
}
