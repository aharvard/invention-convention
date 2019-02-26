import React from "react";
import Form from "../components/form";
import Hero from "../components/hero";
import {
  IconAward,
  IconExhibits,
  IconMoney,
  IconPeople
} from "../components/icons";
import Layout from "../components/layout";
import PartnerCard from "../components/partner-card";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Partner Signup"
      keywords={[`stem`, `upper cumberland`, `cookeville`]}
    />

    <Hero titleYear="2019" title="Invention Convention Partners" />

    <section className="partnership-lead-section">
      <div>
        <h2>Become a Partner</h2>
        <p className="loud">
          Cookeville Children’s Museum is hosting the 3rd annual Invention
          Convention, Upper Cumberland’s premier S.T.E.M. event designed for
          kids and their families.
        </p>
        {/* <p>
          <Link to="/">Learn more about the 2019 Invention Convention</Link>
        </p> */}
        <h3>Want to join us?</h3>
        <p>
          We'd love to have you! Below you'll find a few contribution levels.
          You can get started by filling out the form below. Afterwards, you'll
          be prompted to give via PayPal.
        </p>
        <p>
          Contributions directly benefit{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/CookevilleChildrensMuseum"
          >
            Cookeville Children’s Museum
          </a>{" "}
          and are tax-deductible.
        </p>
        <a className="button" href="#partnerForm">
          Sign Up
        </a>
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
      </PartnerCard>
      <PartnerCard
        levelName="Professor"
        levelAmount="$500"
        earlyBirdAmount="$400"
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
      </PartnerCard>
      <PartnerCard
        levelName="Innovator"
        levelAmount="$750"
        earlyBirdAmount="$650"
        levelDescription="Great for companies or organizations that want to be recognized as a financial partner"
      >
        <ul>
          <li>Name (and logo) printed on event materials</li>
          <li>Shout-outs on Social Media</li>
          <li>Community outreach opportunity</li>
          <li>
            Event co-branding, associating your brand with the Invention
            Convention
          </li>
          <li>Space in lobby for promoting your organization </li>
        </ul>
      </PartnerCard>
    </section>

    <Form />
  </Layout>
);

export default IndexPage;
