import React from "react";
import { Link } from "gatsby";

import "./style/footer.scss";
import Sparky from "./sparky";

const Footer = () => (
  <footer>
    <Sparky />
    <p className="footer-name">2019 Invention Convention</p>
  </footer>
);

export default Footer;
