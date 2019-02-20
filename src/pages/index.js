import React from "react";

import Layout from "../components/layout";
// import Image from "../components/Image";
import SEO from "../components/seo";
import { Form } from "../components/form";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <Form />
    {/* <Image /> */}
  </Layout>
);

export default IndexPage;
