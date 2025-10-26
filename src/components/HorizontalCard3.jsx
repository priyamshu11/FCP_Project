import React from 'react';
import './HorizontalCard3.css';

const HorizontalCard3 = () => {
  return (
    <section className="horizontal-card-3">
      <div className="container">
        <div className="card-content">
          <div className="card-text">
            <h2 className="card-title">Horizontal Card</h2>
            <p className="card-description">
              Horizontal card description, mentioning the feature information. A multiline info, can state whatever info about the feature.
            </p>
            <button className="card-button">button text</button>
          </div>
          <div className="card-graphic">
            <div className="image-container">
              <img src="/src/Assets/Card.jpg" alt="Dashboard Interface" className="dashboard-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalCard3;

