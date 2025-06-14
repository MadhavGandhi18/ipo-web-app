import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [ipos, setIpos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/ipo/')
      .then((response) => {
        console.log("Full response:", response);
        setIpos(response.data);  // Make sure this is an array of IPO objects
      })
      .catch((error) => console.error("API Error:", error));
  }, []);

  return (
    <div className="container my-5">
        <h2 className="mb-4">IPO Listing</h2>
        <div className="row">
            {ipos.map((ipo, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
                <div className="card h-100 shadow-sm">
                {ipo.logo ? (
                    <img
                        src={ipo.logo}
                        alt={`${ipo.company_name} Logo`}
                        className="card-img-top"
                        style={{ height: '180px', objectFit: 'contain', padding: '1rem' }}
                    />
                ) : (
                    <div className="card-img-top text-center text-muted" style={{ height: '200px', padding: '1rem' }}>
                        No Logo
                    </div>
                )}
                    <div className="card-body">
                        <h5 className="card-title">{ipo.company_name}</h5>
                        <p><strong>Status:</strong> {ipo.status}</p>
                        <p><strong>Open Date:</strong> {ipo.open_date}</p>
                        <p><strong>Price Band:</strong> ₹{ipo.price_band}</p>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
};

export default HomePage;
