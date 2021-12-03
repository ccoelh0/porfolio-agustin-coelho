import React from "react";
import { Link } from "react-router-dom";

import foto from "../../images/fotosinfondo.png";
import github from "../../images/sobreMi/github.png";
import gmail from "../../images/sobreMi/gmail.png";
import linkedin from "../../images/sobreMi/linkedin.png";

const SobreMi = () => {
  return (
    <div className="sobreMi" id="sobreMi">
      <div className="sobreMi-contenido">
        <h3>
          Sobre <span>mi</span>
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ipsum
          enim ad sunt fugiat dignissimos, suscipit maxime atque iusto at id
          odit cupiditate adipisci nobis illum perspiciatis doloribus dolorem
          voluptatem.
        </p>
        <div>
          <Link
            to="#"
            onClick={(e) => {
              window.location = `mailto:coelhoagustin1@gmail.com`;
              e.preventDefault();
            }}
            target="_blank"
          >
            <img src={gmail} />
          </Link>
          <a href="https://github.com/ccoelh0" target="_blank">
            <img src={github} />
          </a>
          <a
            href="https://www.linkedin.com/in/agustin-coelho-2a5767175/"
            target="_blank"
          >
            <img src={linkedin} />
          </a>
        </div>
      </div>
      <div className="sobreMi-foto">
        <img src={foto} />
      </div>
    </div>
  );
};

export default SobreMi;
