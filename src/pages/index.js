import { Link } from "gatsby";
import React from "react";
import Hero from "../components/hero";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { IconExhibits, IconAward } from "../components/icons";
import FormContact from "../components/formContact";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`stem`, `upper cumberland`, `cookeville`]} />

    <Hero titleYear="2019" title="Invention Convention" />
    <FormContact />
    <section className="partnership-lead-section">
      <div>
        <h2>You're Invited!</h2>
        <Link to="/partner-signup">Partner Signup</Link>
        <p className="loud">
          Cookeville Children’s Museum is hosting the 3rd annual Invention
          Convention, Upper Cumberland’s premier S.T.E.M. event designed for
          kids and their families.
        </p>
        <h3>Want to join us?</h3>
      </div>
      <div>
        <h3>2019 Invention Convention</h3>
        <ul>
          <li>Free Admission!</li>
          <li>
            <IconExhibits />
            Interact with 10 hands-on Exhibits
          </li>
          <li>
            <IconAward />
            Compete in any of our 4 competitions
          </li>
          <li>Hosted at the Tennessee Tech Fitness Center</li>
          <li>Saturday July 27, 2019 — 10am to 2pm</li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
