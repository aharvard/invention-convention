import React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Form from "../components/form";
import Logo from "../components/logo";

import { ImageExhibitGym } from "../components/images";
import Hero from "../components/hero";
import PartnerCard from "../components/partner-card";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`stem`, `upper cumberland`, `cookeville`]} />

    <Hero>
      <Logo />
      <ImageExhibitGym className="hero-image" />
    </Hero>

    <section className="partnership-lead-section">
      <div>
        <h1>Partner with us!</h1>
        <p className="loud">
          The Cookeville Children’s Museum is hosting their 3rd annual Invention
          Convention
        </p>
        <p>
          Upper Cumberland’s premier S.T.E.M. event design for kids and their
          families
        </p>
      </div>
      <div>
        <h2>Last Year</h2>
        <ul>
          <li>Over 400 people attended</li>
          <li>10 exhibits & 4 competition</li>
          <li>Rased over $13,000</li>
        </ul>
      </div>
    </section>
    <section className="partnership-levels-section">
      <PartnerCard
        levelName="Lab Rats"
        levelAmount="$100"
        levelDescription="Perfect for individuals who want to help promote S.T.E.M. to kids."
      >
        <ul>
          <li>Name printed on event materials</li>
          <li>Shout-outs on Social Media</li>
        </ul>
      </PartnerCard>
      <PartnerCard
        levelName="Professor"
        levelAmount="$500"
        levelDescription="Great for companies or organizations that want to run their own hand-on exhibition booth or sponsor one of ours."
      >
        <ul>
          <li>Name printed on event materials</li>
          <li>Shout-outs on Social Media</li>
        </ul>
      </PartnerCard>
      <PartnerCard
        levelName="Innovator"
        levelAmount="$750"
        levelDescription="Great for companies or organizations that want to be recognized as a financial partner"
      />
    </section>
    {/* <p>
        Invention Convention is a free, educational S.T.E.M. event designed for
        kids and their families!
      </p>
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
      </p> */}

    {/* <Form /> */}
  </Layout>
);

export default IndexPage;
