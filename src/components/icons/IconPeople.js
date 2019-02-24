import React from "react";
import "./style.scss";

const IconPeople = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon"
    height="1em"
    width="1em"
    viewBox="0 0 24 24"
  >
    <circle className="stroke" cx="4.5" cy="6" r="2.25" />
    <path
      className="stroke"
      d="M4.5,9.75A3.75,3.75,0,0,0,.75,13.5v2.25h1.5l.75,6H6"
    />
    <circle className="stroke" cx="19.5" cy="6" r="2.25" />
    <path
      className="stroke"
      d="M19.5,9.75a3.75,3.75,0,0,1,3.75,3.75v2.25h-1.5l-.75,6H18"
    />
    <circle className="stroke" cx="12" cy="3.75" r="3" />
    <path
      className="stroke"
      d="M17.25,13.5a5.25,5.25,0,0,0-10.5,0v2.25H9l.75,7.5h4.5l.75-7.5h2.25Z"
    />
  </svg>
);

export default IconPeople;
