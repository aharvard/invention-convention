import React, { useState } from "react";
import { IconChevron, IconPhoto } from "./icons";
import "./style/form.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    level: "",
    email: "",
    phone: "",
    businessName: ""
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { name, level, email, phone, businessName } = formData;

  return (
    <div className="form-section-wrapper">
      <section>
        <h2>Partner with Us!</h2>
        <form
          name="partnerForm"
          method="post"
          data-netlify="true"
          action={`/success/${level ? level : "labrat"}-signup`}
          id="partnerForm"
        >
          <div className="form-section">
            <h3>1. Contact Info</h3>

            <input type="hidden" name="form-name" value="partnerForm" />

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

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                value={email}
                onChange={e => updateFormData(e)}
                placeholder="hello@email.com"
                type="email"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                value={phone}
                onChange={e => updateFormData(e)}
                placeholder="931-555-5555"
                type="phone"
                // required
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
                  <option value="">Select a Level</option>
                  <option value="labrat">$100 – Lab Rat</option>
                  <option value="professor">$400 – Professor</option>
                  <option value="innovator">$650 – Innovator</option>
                </select>
                <IconChevron />
              </div>
            </div>

            <div
              className={
                level === "professor"
                  ? "field "
                  : level === "innovator"
                  ? "field "
                  : "field hidden"
              }
            >
              <label htmlFor="business">Business/Organization Name</label>
              <input
                id="business"
                name="businessName"
                value={businessName}
                onChange={e => updateFormData(e)}
                type="text"
              />
            </div>

            {/* labrat section */}
            <div className={level === "labrat" ? " " : " hidden"}>
              <div className="file-input">
                <IconPhoto />
                <div>
                  <label htmlFor="labRatPhoto">
                    If you'd like, please upload a photo that we can share on
                    social media (not required).
                  </label>
                  <input id="labRatPhoto" type="file" name="labRatPhoto" />
                </div>
              </div>
            </div>

            {/* professor section */}

            <div className={level === "professor" ? " " : " hidden"}>
              <fieldset>
                <legend>Would you like to run your own exhibit booth?</legend>

                <div className="radio">
                  <input
                    type="radio"
                    id="contactChoice1"
                    name="contact"
                    value="email"
                  />
                  <label htmlFor="contactChoice1">
                    Yes, I'll run my own exhibit booth.
                  </label>
                </div>

                <div className="radio">
                  <input
                    type="radio"
                    id="contactChoice2"
                    name="contact"
                    value="phone"
                  />
                  <label htmlFor="contactChoice2">
                    No, I'd like Invention Convention to manage a booth for me.
                  </label>
                </div>

                <div className="radio">
                  <input
                    type="radio"
                    id="contactChoice3"
                    name="contact"
                    value="mail"
                  />
                  <label htmlFor="contactChoice3">
                    Not sure, I'd like to get some more info.
                  </label>
                </div>
              </fieldset>
            </div>

            <div className={level === "innovator" ? " " : " hidden"}>
              <div className="file-input">
                <IconPhoto />
                <div>
                  <label htmlFor="innovatorPhoto">
                    Please provide a high quality logo we can use on print
                    materials.
                  </label>
                  <input
                    id="innovatorPhoto"
                    type="file"
                    name="innovatorPhoto"
                    onChange={e => updateFormData(e)}
                  />
                </div>
              </div>
            </div>
          </div>

          <button type="submit">Submit & Make Donation</button>
        </form>
      </section>
    </div>
  );
};

export default Form;
