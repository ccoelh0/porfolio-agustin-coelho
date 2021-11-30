import React from "react";
import Button from "@mui/material/Button";

export default function Boton({ link }) {
  return (
    <div>
      <Button variant="contained" href={link} target="_blank" color="primary">
        Ver repositorio
      </Button>
    </div>
  );
}
