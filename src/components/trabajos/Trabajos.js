import React from "react";

import TrabajosEspecificos from "./TrabajosEspecifico";

import MovieFinderMobile from "../../images/trabajos/moviefinder/mobile.png";
import MovieFinderDesktop from "../../images/trabajos/moviefinder/responsive.png";

import NacionGamerMobile from "../../images/trabajos/naciongamer/mobile.png";
import NacionGamerDesktop from "../../images/trabajos/naciongamer/desktop.png";

import PodcastHouseMobile from "../../images/trabajos/podcast/mobile.png";
import PodcastHouseDesktop from "../../images/trabajos/podcast/desktop.png";

import AngelesMobile from "../../images/trabajos/angeles/mobile.png";
import AngelesDesktop from "../../images/trabajos/angeles/desktop.png";

import EmiliaMobile from "../../images/trabajos/emilia/mobile.png";
import EmiliaDesktop from "../../images/trabajos/emilia/desktop.png";

import FlexMobile from "../../images/trabajos/flex/mobile.png";
import FlexDesktop from "../../images/trabajos/flex/desktop.png";

import appMobile from "../../images/trabajos/appnotas/mobile.png";
import appDesktop from "../../images/trabajos/appnotas/desktop.png";

import contrasenasMobile from "../../images/trabajos/contrasenas/mobile.png";
import contrasenasDesktop from "../../images/trabajos/contrasenas/desktop.png";

import formMobile from "../../images/trabajos/form/mobile.png";
import formDesktop from "../../images/trabajos/form/desktop.png";

export default function Trabajos() {
  const proyect1 = `proyects1`;
  const proyect2 = `proyects2`;

  const contenedorImg1 = `proyects-contenedorImg1`;
  const contenedorImg2 = `proyects-contenedorImg2`;

  const proyects = [
    {
      titulo: "Tienda",
      span: " Flex",
      parrafo:
        "En este trabajo se utilizó ReactJs para simular la funcionalidad de un ecommerce. El mismo cuenta con una lista de productos traida de Firebase y también con un carrito de productos. Por último, cuando el usuario finaliza la compra, los datos de esta se guardan en Firebase.",
      img1: FlexMobile,
      img2: FlexDesktop,
      link: "https://github.com/ccoelh0/tienda-flex",
      claseContainer: proyect1,
      claseImg: contenedorImg1,
    },
    {
      titulo: "Nación",
      span: " Gamer",
      parrafo:
        "Desarrollo de una pagina sobre una tienda de videojuegos totalmente responsive. La misma simular la interaccoin de un carrito de compras utilizando HTML, CSS y JavaScript.",
      img1: NacionGamerMobile,
      img2: NacionGamerDesktop,
      link: "https://ccoelh0.github.io/tienda-de-videjuegos/",
      claseContainer: proyect2,
      claseImg: contenedorImg2,
    },
    {
      titulo: "Formulario de",
      span: " Validación",
      parrafo:
        "Este es un formulario de validacion que es interactivo. Su proposito es que cada vez que vas llenando los correspondientes inputs va a ir cambiando los valores en la tarjeta Tambien segun el primer numero que pongas aparecera el logo de VISA (4) o MasterCard (5). Los inputs estan validados para que solo se puedan poner valores concretos.",
      img1: formMobile,
      img2: formDesktop,
      link: "https://github.com/ccoelh0/Formulario-de-validacion-interactivo",
      claseContainer: proyect1,
      claseImg: contenedorImg1,
    },
    {
      titulo: "Movie",
      span: " Finder",
      parrafo:
        "Desarrollo de un app que, segun la palabra que buscas, te trae una peliculas especifica. Realizada con HTML, CSS y JavaScript y es totalmente responsive",
      img1: MovieFinderMobile,
      img2: MovieFinderDesktop,
      link: "https://github.com/ccoelh0/buscador-de-peliculas",
      claseContainer: proyect2,
      claseImg: contenedorImg2,
    },
    {
      titulo: "Podcast",
      span: " House",
      parrafo: "Maquetacion de landing para un podcast totalmente responsive.",
      img1: PodcastHouseMobile,
      img2: PodcastHouseDesktop,
      link: "https://ccoelh0.github.io/buscador-de-peliculas/",
      claseContainer: proyect1,
      claseImg: contenedorImg1,
    },
    {
      titulo: "Los Ángeles",
      span: " Studio",
      parrafo:
        "Proyecto de maquetacion de un sitio de tatuajes. Cuenta con 5 vistas, todas responsive. Ademas con un formulario de contacto y distintas animaciones. Realizado con HTML, Boostrap y SASS.",
      img1: AngelesMobile,
      img2: AngelesDesktop,
      link: "https://ccoelh0.github.io/tienda-de-videjuegos/",
      claseContainer: proyect2,
      claseImg: contenedorImg2,
    },
    {
      titulo: "App de",
      span: " notas",
      parrafo:
        "Esta app fue creada con JavaScript y te permite crear notas que quedaran guardadas en tu LocalStorage.",
      img1: appMobile,
      img2: appDesktop,
      link: "https://github.com/ccoelh0/App-de-notas",
      claseContainer: proyect1,
      claseImg: contenedorImg1,
    },
    {
      titulo: "Restaurant",
      span: " Emilia",
      parrafo:
        "Desarrollo de una carta para un restaurante totalmente interactiva. Se uso HTML, CSS y Javascript",
      img1: EmiliaMobile,
      img2: EmiliaDesktop,
      link: "https://ccoelh0.github.io/tienda-de-videjuegos/",
      claseContainer: proyect2,
      claseImg: contenedorImg2,
    },
    {
      titulo: "Generador de",
      span: " contraseñas",
      parrafo:
        "Este es un app creada con javascript que, segun las caracteristicas que clickeas, te crea una contrasena.",
      img1: contrasenasMobile,
      img2: contrasenasDesktop,
      link: "https://github.com/ccoelh0/Generador-de-contrasenas",
      claseContainer: proyect1,
      claseImg: contenedorImg1,
    },
  ];

  return (
    <>
      <div className="proyectContainer" id="trabajos">
        <h2 className="proyect-titleGral">
          Mis <span>trabajos</span>
        </h2>
        {proyects.map((p) => {
          return (
            <TrabajosEspecificos
              titulo={p.titulo}
              span={p.span}
              parrafo={p.parrafo}
              src1={p.img1}
              src2={p.img2}
              link={p.link}
              claseContainer={p.claseContainer}
              claseImg={p.claseImg}
              texto={`Ver repositorio`}
            />
          );
        })}
      </div>
    </>
  );
}
