// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react";

import "./Form.scss";

export const Form = () => (
  <form
    name="partner-form"
    method="post"
    data-netlify="true"
    // data-netlify-honeypot="bot-field"
    action="/page-2/"
    id="partnerForm"
  >
    <input type="hidden" name="partner-form" value="partner-form" />
    <div className="field">
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" placeholder="First Last" />
    </div>

    <div className="field">
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" />
    </div>

    <div className="field">
      <label htmlFor="phone">Phone</label>
      <input id="phone" type="phone" name="phone" />
    </div>

    <div className="field">
      <label htmlFor="business">Business Name</label>
      <input id="business" type="business" name="business" />
    </div>

    <div className="field">
      <label htmlFor="logo">Company Logo</label>
      <input id="logo" type="file" name="logo" />
    </div>

    <button type="submit">Send</button>
  </form>
);
