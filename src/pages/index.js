import React from "react";

import Layout from "../components/Layout";
import Image from "../components/Image";
import SEO from "../components/SEO";
import { Form } from "../components/Form";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <Form />
    {/* <Image /> */}
  </Layout>
);

export default IndexPage;
