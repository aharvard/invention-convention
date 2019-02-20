import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./style.scss";

const Header = ({ siteTitle }) => (
  <header className="header">
      
      <Link to="/">{siteTitle}</Link>
    
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
