import React from "react";
import SkillsTags from "../skillstags/SkillsTags";

const SobreMi = () => {
  return (
    <div className="sobreMiGral">
      <div>
        <h3 style={{ textAlign: "center" }}>
          Un poco <span>sobre mi</span>
        </h3>
      </div>
      <div className="sobreMi" id="sobreMi">
        <div className="sobreMi-contenido">
          <p>
            Soy un front end developer con gran interés en JavaScript y React y
            en crear I’m a Front-End Developer located in Poland. I have a
            serious passion for UI effects, animations and creating intuitive,
            dynamic user experiences.
            <br />
            <br />
            Well-organised person, problem solver, independent employee with
            high attention to detail. Fan of MMA, outdoor activities, TV series
            and English literature. A family person and father of two fractious
            boys,
            <br />
            <br />
            Well-organised person, problem solver, independent employee with
            high Interested in the entire frontend spectrum and working on
            ambitious projects with positive people.
          </p>
        </div>
        <div className="sobreMi-foto">
          <SkillsTags />
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
