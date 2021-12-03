import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import github from "../../images/github.png";
import git from "../../images/git.png";
import html from "../../images/html.png";
import css from "../../images/css-3.png";
import javascript from "../../images/js.png";
import react from "../../images/react.png";
import firebase from "../../images/firebase.png";
import sass from "../../images/sass.png";
import jquery from "../../images/jquery.png";
import boostrap from "../../images/boostrap.png";
import npm from "../../images/npm.png";

export default function Skills() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1023, min: 600 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 599, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="carrusel" id="skills">
        <div className="skills">
          <h2>
            Mis <span>habilidades</span>
          </h2>
        </div>
        <Carousel
          swipeable={true}
          draggable={true}
          arrows={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          transitionDuration={500}
          containerClass="carousel-container"
          className="owl-carousel"
        >
          <img src={html} />
          <img src={css} />
          <img src={sass} />
          <img src={boostrap} />
          <img src={git} />
          <img src={github} />
          <img src={javascript} />
          <img src={jquery} />
          <img src={react} />
          <img src={firebase} />
          <img src={npm} />
        </Carousel>
      </div>
    </>
  );
}
