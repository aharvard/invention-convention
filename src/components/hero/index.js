import PropTypes from "prop-types";
import React from "react";

import "./style.scss";

const Hero = ({ children }) => (
  <div className="Hero">
      
      {children}
    
  </div>
);

Hero.propTypes = {
  children: PropTypes.node.isRequired
};

Hero.defaultProps = {

};

export default Hero;
