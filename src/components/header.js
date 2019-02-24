import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./style.scss";

import Sparky from "./sparky";

const Header = ({ siteTitle }) => (
  <header className="header">
    <Sparky />
    <Link to="/" className="header-link">
      {siteTitle}
    </Link>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
