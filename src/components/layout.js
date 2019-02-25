import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Footer from "./footer";
import "./style/global.scss";
import "./style/sections.scss";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
