import React, { useState } from "react";
import "./style/form.scss";

const Form = ({ testFormProp }) => {
  const [formData, setFormData] = useState({
    name: testFormProp,
    level: "levelTwo",
    email: "",
    phone: ""
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { name, level, email, phone } = formData;

  const action = () => {
    if (level === "levelOne") {
      return `/page-2`;
    }
  };

  return (
    <div className="form-section-wrapper">
      <section>
        <h2>Partnership Signup</h2>
        <form
          name="partnerForm"
          method="post"
          data-netlify="true"
          action={action}
          id="partnerForm"
        >
          <div>
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
                // required
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
                // required
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

          <div>
            <h3>2. Partnership Details</h3>
            <div className="field">
              <label htmlFor="level">Partnership Level</label>
              <div className="customSelect">
                <select
                  id="level"
                  value={level}
                  onChange={e => updateFormData(e)}
                  placeholder="Last name"
                  name="level"
                  required
                >
                  <option>Select a Level</option>
                  <option value="levelOne">$100 – Lab Rat</option>
                  <option value="levelTwo">$500 – Prodigy</option>
                  <option value="levelThree">$750 – Professor</option>
                </select>
              </div>
            </div>
            {level === "levelTwo" && (
              <>
                <div className="field">
                  <label htmlFor="business">Business Name</label>
                  <input id="business" type="business" name="business" />
                </div>

                {/* <div className="field">
                  <label htmlFor="logo">Company Logo</label>
                  <input id="logo" type="file" name="logo" />
                </div> */}

                <fieldset>
                  <legend>Would you like to run your own exhibit booth?</legend>

                  <div>
                    <input
                      type="radio"
                      id="contactChoice1"
                      name="contact"
                      value="email"
                    />
                    <label htmlFor="contactChoice1">
                      Yes, I will run my own exhibit booth.
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="contactChoice2"
                      name="contact"
                      value="phone"
                    />
                    <label htmlFor="contactChoice2">
                      No, I would like Invention Convention to manage a booth
                      for me
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="contactChoice3"
                      name="contact"
                      value="mail"
                    />
                    <label htmlFor="contactChoice3">
                      I don't know. Please reach out to me discuss!
                    </label>
                  </div>
                </fieldset>
              </>
            )}
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Form;

// const Form = () => (
//   <form
//     name="partnerForm"
//     method="post"
//     data-netlify="true"
//     action="/page-2/"
//     id="partnerForm"
//   >
//     <input type="hidden" name="partnerForm" value="partnerForm" />
//     <div className="field">
//       <label htmlFor="name">Your Name</label>
//       <input id="name" type="text" name="name" placeholder="First Last" />
//     </div>

//     <div className="field">
//       <label htmlFor="email">Email</label>
//       <input id="email" type="email" name="email" />
//     </div>

//     <div className="field">
//       <label htmlFor="phone">Phone</label>
//       <input id="phone" type="phone" name="phone" />
//     </div>

//     <div className="field">
//       <label htmlFor="level">Partnership Level</label>
//       <select id="level">
//         <option value="100">$100</option>
//         <option value="500">$500</option>
//         <option value="750">$750</option>
//       </select>
//     </div>

//     <div className="field">
//       <label htmlFor="business">Business Name</label>
//       <input id="business" type="business" name="business" />
//     </div>

//     <div className="field">
//       <label htmlFor="logo">Company Logo</label>
//       <input id="logo" type="file" name="logo" />
//     </div>

//     <button type="submit">Send</button>
//   </form>
// );

// export default Form
