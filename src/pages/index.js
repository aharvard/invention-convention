import React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Form from "../components/form";
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`stem`, `upper cumberland`, `cookeville`]} />
    <div>
      
      <Hero>
        <h1>Index Page Title</h1>
      </Hero>

      <Form/>
    </div>
  </Layout>
);

export default IndexPage;
