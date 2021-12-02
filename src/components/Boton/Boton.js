import React from "react";
import Button from "@mui/material/Button";

export default function Boton({ link, texto }) {
  return (
    <div>
      <Button variant="contained" href={link} target="_blank" color="primary">
        {texto}
      </Button>
    </div>
  );
}
