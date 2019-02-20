import React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";
import {Form} from "../components/form";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`stem`, `upper cumberland`, `cookeville`]} />
    <div>
      <h1>2019 Invention Convention</h1>
      <p>New Site Coming Soon!</p>
      <Form/>
    </div>
  </Layout>
);

export default IndexPage;
