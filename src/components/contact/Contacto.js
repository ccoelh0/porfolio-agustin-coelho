import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Button from "@mui/material/Button";

export default function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mnkjdg7",
        "template_tujditq",
        form.current,
        "user_zQgQok3rHAL3SbQGKEAMh"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form">
      <div className="form-info" id="contacto">
        <h3>¿Tenes un proyecto?</h3>
        <h4>Hablemos!</h4>
        <p>
          Estoy interesado en todo tiempo de trabajos freelances o en empresas.
          No obstante, si tenes cualquier otra consulta no dudes en enviarme un
          mensaje!
        </p>
      </div>

      <form className="form-contacto" ref={form} onSubmit={sendEmail}>
        <input placeholder=" Nombre" type="text" name="user_name" required />
        <input placeholder=" Mail" type="email" name="user_email" required />
        <input placeholder=" Asunto" type="text" name="subject" required />
        <textarea placeholder=" Mensaje" name="message" required />
        <button type="submit" value="Send">
          Enviar mensaje!
        </button>
      </form>
    </div>
  );
}
