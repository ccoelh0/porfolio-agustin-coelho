import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import github from "../../images/github.png";
import html from "../../images/html.png";
import css from "../../images/css-3.png";
import javascript from "../../images/javascript.png";
import react from "../../images/react.png";
import sass from "../../images/sass.png";

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
      <div className="carrusel">
        <div
          className="skills"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
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
          <img src={javascript} />
          <img src={react} />
          <img src={github} />
        </Carousel>
      </div>
    </>
  );
}
