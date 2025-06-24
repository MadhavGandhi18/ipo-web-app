import React from 'react';
import '../styles/IPOCard.css';

const IPOCard = ({ ipo }) => {
  return (
    <div className="ipo-card">
      <img
        src={ipo.logo}
        alt={`${ipo.company_name} Logo`}
        className="ipo-logo"
      />

      <h5 className="ipo-title">{ipo.company_name}</h5>

      <p className="ipo-info">
        <strong>Status:</strong> {ipo.status}
      </p>
      <p className="ipo-info">
        <strong>Open Date:</strong> {ipo.open_date}
      </p>
      <p className="ipo-info">
        <strong>Price Band:</strong> ₹{ipo.price_band}
      </p>
    </div>
  );
};

export default IPOCard;
