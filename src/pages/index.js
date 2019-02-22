import React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Form from "../components/form";
import Hero from "../components/hero";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`stem`, `upper cumberland`, `cookeville`]} />
    <div>
      <Hero>
        <h1>Join Us!</h1>
        <p>Saturday, July 27 2019</p>
        <p>
          Invention Convention is a free, educational S.T.E.M. event designed
          for kids and their families!
        </p>
      </Hero>

      <p>
        We're hosting our third annual educational event designed for kids, ages
        2-12, and their families! There will be hands-on activities, building
        displays, competitions, and a robotics showcase.{" "}
      </p>

      <p>
        We want to engage kids in science, technology, engineering, and math
        (STEM) in the most fun way possible.
      </p>

      <p>
        By offering free admission, we ensure that all children are able to
        participate, regardless of their family’s socioeconomic background.
      </p>

      <Form />
    </div>
  </Layout>
);

export default IndexPage;
