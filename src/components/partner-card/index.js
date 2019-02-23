import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./style.scss";

const PartnerCard = ({
  levelName,
  levelAmount,
  levelDescription,
  children
}) => (
  <div className="partner-card">
    <div className="partner-card-header">
      <h2 className="partner-card-level-name">{levelName}</h2>
      <span className="partner-card-level-amount">{levelAmount}</span>
      <p className="partner-card-level-description">{levelDescription}</p>
    </div>

    <div className="partner-card-body">
      <h3>What You'll Get</h3>
      {children}
    </div>
  </div>
);

PartnerCard.propTypes = {
  levelName: PropTypes.string,
  levelAmount: PropTypes.string,
  levelDescription: PropTypes.string
};

PartnerCard.defaultProps = {
  levelName: `Level Name`,
  levelAmount: `$100`,
  levelDescription: `Lorem`
};

export default PartnerCard;
