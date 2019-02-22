import PropTypes from "prop-types";
import React from "react";

import "./style.scss";

const Hero = ({ children }) => <div className="hero">{children}</div>;

Hero.propTypes = {
  children: PropTypes.node.isRequired
};

Hero.defaultProps = {};

export default Hero;
