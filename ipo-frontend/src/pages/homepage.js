import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IPOCard from '../components/IPOCard';
import '../styles/homepage.css';

const HomePage = () => {
  const [ipos, setIpos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/ipo/')
      .then((response) => {
        setIpos(response.data);
      })
      .catch((error) => console.error("API Error:", error));
  }, []);

  return (
    <div className="homepage">
      <h2 className="homepage-title">Upcoming IPO</h2>
      <p className="homepage-description">Companies that have filled for an IPO with SEBI. Few details might be disclosed by the companies later.</p>

      <div className="ipo-container">
        {ipos.map((ipo, index) => (
          <IPOCard key={index} ipo={ipo} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
