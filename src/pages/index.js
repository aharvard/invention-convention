import React from "react";
import Form from "../components/form";
import Hero from "../components/hero";
import {
  IconAward,
  IconExhibits,
  IconMoney,
  IconPeople
} from "../components/Icons";
import Layout from "../components/layout";
import PartnerCard from "../components/partner-card";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`stem`, `upper cumberland`, `cookeville`]} />

    <Hero titleYear="2019" title="Invention Convention Partnership" />

    <section className="partnership-lead-section">
      <div>
        <h2>Become a Partner</h2>
        <p className="loud">
          Cookeville Children’s Museum is hosting the 3rd annual Invention
          Convention.
        </p>
        <p>
          Upper Cumberland’s premier S.T.E.M. event designed to be free for kids
          and their families.
        </p>
        <p>
          Contributions to made directly benefit Cookeville Children’s Museum
          and are tax-deductible.
        </p>
      </div>
      <div>
        <h3>Last Year</h3>
        <ul>
          <li>
            <IconPeople />
            Over 400 people attended
          </li>
          <li>
            <IconExhibits />
            10 hands-on exhibits
          </li>
          <li>
            <IconAward />4 competitions
          </li>
          <li>
            <IconMoney />
            Rased over $13,000
          </li>
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
        <button>Sign Me Up!</button>
      </PartnerCard>
      <PartnerCard
        levelName="Professor"
        levelAmount="$500"
        levelDescription="Great for companies or organizations that want to run their own hand-on exhibition booth or sponsor one of ours."
      >
        <ul>
          <li>Name printed on event materials</li>
          <li>Shout-outs on Social Media</li>
          <li>Community outreach opportunity</li>
          <li>
            Hands-on exhibition booth (run your own or sponsor one of ours)
          </li>
        </ul>
        <button>Sign Me Up!</button>
      </PartnerCard>
      <PartnerCard
        levelName="Innovator"
        levelAmount="$750"
        levelDescription="Great for companies or organizations that want to be recognized as a financial partner"
      >
        <ul>
          <li>Name (and logo) printed on event materials</li>
          <li>Shoutouts on Social Media</li>
          <li>Community outreach opportunity</li>
          <li>
            Event co-branding, associating your brand with the Invention
            Convention
          </li>
          <li>Space in lobby for promoting your organization </li>
        </ul>
        <a className="button" href="#partnerForm">
          Sign Me Up!
        </a>
      </PartnerCard>
    </section>
    <Form testFormProp="lorem ipsum" />
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
