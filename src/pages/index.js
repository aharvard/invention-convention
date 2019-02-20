import React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`stem`, `upper cumberland`, `cookeville`]} />
    <div>
      <h1>2019 Invention Convention</h1>
      <p>New Site Coming Soon!</p>
    </div>
  </Layout>
);

export default IndexPage;
