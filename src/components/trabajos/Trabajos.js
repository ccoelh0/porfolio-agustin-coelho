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

export default function Trabajos() {
  const proyect1 = `proyects1`;
  const proyect2 = `proyects2`;

  const contenedorImg1 = `proyects-contenedorImg1`;
  const contenedorImg2 = `proyects-contenedorImg2`;

  const proyects = [
    {
      titulo: "Tienda",
      span: "Flex",
      parrafo:
        "En este trabajo se utilizó ReactJs para simular la funcionalidad de un ecommerce. El mismo cuenta con una lista de productos traida de Firebase y también con un carrito de productos. Por último, cuando el usuario finaliza la compra, los datos de esta se guardan en Firebase.",
      img1: FlexMobile,
      img2: FlexDesktop,
      link: "https://github.com/ccoelh0/proyecto-react",
      claseContainer: proyect1,
      claseImg: contenedorImg1,
    },
    {
      titulo: "Nacion",
      span: "Gamer",
      parrafo:
        "Desarrollo de una pagina sobre una tienda de videojuegos totalmente responsive. La misma simular la interaccoin de un carrito de compras utilizando HTML, CSS y JavaScript.",
      img1: NacionGamerMobile,
      img2: NacionGamerDesktop,
      link: "https://ccoelh0.github.io/tienda-de-videjuegos/",
      claseContainer: proyect2,
      claseImg: contenedorImg2,
    },
    {
      titulo: "Podcast",
      span: "House",
      parrafo: "Maquetacion de landing para un podcast totalmente responsive.",
      img1: PodcastHouseMobile,
      img2: PodcastHouseDesktop,
      link: "https://ccoelh0.github.io/buscador-de-peliculas/",
      claseContainer: proyect1,
      claseImg: contenedorImg1,
    },
    {
      titulo: "Los Angeles",
      span: "Studio",
      parrafo:
        "Proyecto de maquetacion de un sitio de tatuajes. Cuenta con 5 vistas, todas responsive. Ademas con un formulario de contacto y distintas animaciones. Realizado con HTML, Boostrap y SASS.",
      img1: AngelesMobile,
      img2: AngelesDesktop,
      link: "https://ccoelh0.github.io/tienda-de-videjuegos/",
      claseContainer: proyect2,
      claseImg: contenedorImg2,
    },
    {
      titulo: "Movie",
      span: "Finder",
      parrafo:
        "Desarrollo de un app que, segun la palabra que buscas, te trae una peliculas especifica. Realizada con HTML, CSS y JavaScript y es totalmente responsive",
      img1: MovieFinderMobile,
      img2: MovieFinderDesktop,
      link: "https://github.com/ccoelh0/buscador-de-peliculas",
      claseContainer: proyect1,
      claseImg: contenedorImg1,
    },
    {
      titulo: "Restaurant",
      span: "Emilia",
      parrafo:
        "Desarrollo de una carta para un restaurante totalmente interactiva. Se uso HTML, CSS y Javascript",
      img1: EmiliaMobile,
      img2: EmiliaDesktop,
      link: "https://ccoelh0.github.io/tienda-de-videjuegos/",
      claseContainer: proyect2,
      claseImg: contenedorImg2,
    },
  ];

  return (
    <>
      <div className="proyectContainer">
        <h2 className="proyect-titleGral">
          Mis <span>Trabajos</span>
        </h2>
        {/* <p className="proyect-parrafo">Conoce todos mis trabajos!</p> */}
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
            />
          );
        })}
      </div>
    </>
  );
}
