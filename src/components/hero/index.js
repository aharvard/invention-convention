import React from "react";
import { ImageExhibitGym } from "../images";
import Sparky from "../sparky/index";

import "./style.scss";

const Hero = ({ children, title, titleYear }) => (
  <div className="hero">
    <ImageExhibitGym />
    <h1 className="hero-title">
      <span className="hero-title-year">{titleYear}</span>
      {title}
    </h1>
    <Sparky />
  </div>
);

Hero.defaultProps = {
  title: "title",
  titleYear: "2019"
};

export default Hero;
