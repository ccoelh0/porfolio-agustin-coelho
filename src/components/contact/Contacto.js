import React from "react";

export default function Contacto() {
  return (
    <form>
      <div>
        <h3>Contactame</h3>
        <p>
          I’m interested in freelance opportunities – especially ambitious or
          large projects.
          <br />
          However, if you have other request or question, don’t hesitate to use
          the form.
        </p>
      </div>

      <div>
        <input placeholder=" Nombre" />
        <input placeholder=" Mail" />
        <input placeholder=" Asunto" />
        <textarea placeholder=" Mensaje"></textarea>
      </div>
    </form>
  );
}
