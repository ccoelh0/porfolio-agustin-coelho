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
          Un poco <span style={{ marginLeft: 10 }}>sobre mi</span>
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
          provident. Quaerat quisquam nostrum sed accusamus, molestias placeat
          iste quos deserunt.
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
