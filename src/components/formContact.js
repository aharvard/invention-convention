import React, { useState } from "react";
import { IconChevron, IconPhoto } from "./icons";
import "./style/form.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    level: ""
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { name, level } = formData;

  return (
    <div className="form-section-wrapper">
      <section>
        <h2>Partner with Us!</h2>
        <form
          name="contactForm"
          method="post"
          data-netlify="true"
          // action={`/success/${level}-signup`}
          id="partnerForm"
        >
          <div className="form-section">
            <h3>1. Contact Info</h3>
            <input type="hidden" name="partnerForm" value="partnerForm" />

            <div className="field">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                value={name}
                onChange={e => updateFormData(e)}
                placeholder="Full Name"
                type="text"
                required
              />
            </div>
          </div>

          <div className="form-section">
            <h3>2. Partner Details</h3>
            <div className="field">
              <label htmlFor="level">Partnership Level</label>
              <div className="select">
                <select
                  id="level"
                  value={level}
                  onChange={e => updateFormData(e)}
                  placeholder="Last name"
                  name="level"
                  required
                >
                  <option>Select a Level</option>
                  <option value="labrat">$100 – Lab Rat</option>
                  <option value="professor">$400 – Professor</option>
                  <option value="innovator">$650 – Innovator</option>
                </select>
                <IconChevron />
              </div>
            </div>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Form;
