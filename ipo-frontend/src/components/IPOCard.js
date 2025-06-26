import React from 'react';
import '../styles/IPOCard.css';

const formatDate = (dateString) => {
  if (!dateString) return 'Not Issued';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-GB', options);
};

const IPOCard = ({ ipo }) => {
  return (
    <div className="ipo-card">
      <div className="ipo-card-header">
        <img src={ipo.logo} alt={`${ipo.company_name} logo`} className="ipo-logo" />
        <h2 className="ipo-company-name">{ipo.company_name}</h2>
      </div>

      <div className="ipo-card-body">
        <div className="data-point">
          <span className="label">Price Band</span>
          <span className="value">₹{ipo.price_band || 'Not Issued'}</span>
        </div>
        <div className="data-point">
          <span className="label">Open</span>
          <span className="value">{formatDate(ipo.open_date)}</span>
        </div>
        <div className="data-point">
          <span className="label">Close</span>
          <span className="value">{formatDate(ipo.close_date)}</span>
        </div>
        <div className="data-point">
          <span className="label">Issue Size</span>
          <span className="value">{ipo.issue_size || 'Not Issued'}</span>
        </div>
        <div className="data-point">
          <span className="label">Issue Type</span>
          <span className="value">{ipo.issue_type || 'Not Issued'}</span>
        </div>
        <div className="data-point">
          <span className="label">Listing Date</span>
          <span className="value">{formatDate(ipo.listing_date)}</span>
        </div>
      </div>

      <div className="ipo-card-footer">
        <a href={ipo.rhp_pdf} target="_blank" rel="noopener noreferrer" className="btn btn-rhp">RHP</a>
        <a href={ipo.drhp_pdf} target="_blank" rel="noopener noreferrer" className="btn btn-drhp">DRHP</a>
      </div>
    </div>
  );
};

export default IPOCard;
