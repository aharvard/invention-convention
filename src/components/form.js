import React, { useState } from "react";
import { IconChevron, IconPhoto, IconPayPal } from "./icons";
import "./style/form.scss";

const levelOne = "Lab Rat";
const levelTwo = "Professor";
const levelThree = "Innovator";

const levelOneAmount = "$100";
const levelTwoAmount = "$400";
const levelThreeAmount = "$650";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    level: "",
    email: "",
    phone: "",
    businessName: "",
    booth: "",
    file: ""
  });

  const [formShowing, setFormShowing] = useState(true);

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { name, level, email, phone, businessName, booth, file } = formData;

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "partnerForm", ...formData })
    })
      .then(setFormShowing(false))
      .catch(error => alert(error));

    e.preventDefault();
  };

  return (
    <div className="form-section-wrapper">
      <section>
        {formShowing ? (
          <>
            <h2>Partner with Us!</h2>
            <form
              name="partnerForm"
              method="post"
              data-netlify="true"
              id="partnerForm"
              onSubmit={handleSubmit}
            >
              <div className="form-section">
                <h3>1. Contact Info</h3>

                {/* Hidden Netlify  */}
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
                      <option value="levelOne">
                        {levelOneAmount} – {levelOne}
                      </option>
                      <option value="levelTwo">
                        {levelTwoAmount} – {levelTwo}
                      </option>
                      <option value="levelThree">
                        {levelThreeAmount} – {levelThree}
                      </option>
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
                <div className={level === "levelOne" ? " " : " hidden"}>
                  <div className="file-input">
                    <IconPhoto />
                    <div>
                      <label htmlFor="labRatPhoto">
                        If you'd like, please upload a photo that we can share
                        on social media (not required).
                      </label>
                      <input
                        id="labRatPhoto"
                        type="file"
                        name="labRatPhoto"
                        onChange={e => updateFormData(e)}
                        value={file}
                      />
                    </div>
                  </div>
                </div>

                {/* professor section */}

                <div className={level === "levelTwo" ? " " : " hidden"}>
                  <div className="field">
                    <label htmlFor="booth">
                      Would you like to run your own exhibit booth?
                    </label>
                    <div className="select">
                      <IconChevron />
                      <select
                        id="booth"
                        value={booth}
                        onChange={e => updateFormData(e)}
                        placeholder="Last name"
                        name="booth"
                        required
                      >
                        <option value="">Select an Option</option>
                        <option value="yes">Yes!</option>
                        <option value="no">
                          No, please run a booth for me.
                        </option>
                        <option value="need info">
                          Not sure, I'd like to get some more info.
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* <fieldset>
                    <legend>
                      Would you like to run your own exhibit booth?
                    </legend>
                    {radioSelection}

                    <div className="radio">
                      <input
                        type="radio"
                        id="exBooth1"
                        name="exBooth"
                        value="yes"
                        checked={radioSelection === "yes"}
                        onChange={handleRadioChange}
                      />
                      <label htmlFor="exBooth1">
                        Yes, I'll run my own exhibit booth.
                      </label>
                    </div>

                    <div className="radio">
                      <input
                        type="radio"
                        id="exBooth2"
                        name="exBooth"
                        value="no"
                        checked={radioSelection === "no"}
                        onChange={handleRadioChange}
                      />
                      <label htmlFor="exBooth2">
                        No, I'd like Invention Convention to manage a booth for
                        me.
                      </label>
                    </div>

                    <div className="radio">
                      <input
                        type="radio"
                        id="exBooth3"
                        name="exBooth"
                        value="not sure"
                        checked={radioSelection === "not sure"}
                        onChange={handleRadioChange}
                      />
                      <label htmlFor="exBooth3">
                        Not sure, I'd like to get some more info.
                      </label>
                    </div>
                  </fieldset> */}
                </div>

                <div className={level === "levelThree" ? " " : " hidden"}>
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
          </>
        ) : (
          <>
            <div class="form-section-thanks">
              <h2>
                Thanks,{" "}
                {level === "levelOne"
                  ? "you " + levelOne
                  : level === "levelTwo"
                  ? levelTwo
                  : level === "levelThree"
                  ? levelThree
                  : null}
                !
              </h2>
              <p className="loud">You can now make your donation.</p>
              <form
                method="post"
                action="https://www.paypal.com/cgi-bin/webscr"
              >
                <input type="hidden" name="cmd" value="_donations" />
                <input
                  type="hidden"
                  name="business"
                  value="andrew.t.harvard@gmail.com"
                />
                <input
                  type="hidden"
                  name="item_name"
                  value={`Invention Convention Donation, ${
                    level === " levelOne"
                      ? levelOne
                      : level === "levelTwo"
                      ? levelTwo
                      : level === "levelThree"
                      ? levelThree
                      : null
                  } level`}
                />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="tax" value="0" />
                <input
                  type="hidden"
                  name="amount"
                  value={
                    level === "levelOne"
                      ? levelOneAmount
                      : level === "levelTwo"
                      ? levelTwoAmount
                      : level === "levelThree"
                      ? levelThreeAmount
                      : null
                  }
                />

                <button type="submit">
                  <IconPayPal />
                  {level === "levelOne"
                    ? levelOneAmount
                    : level === "levelTwo"
                    ? levelTwoAmount
                    : level === "levelThree"
                    ? levelThreeAmount
                    : null}
                </button>
              </form>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Form;
