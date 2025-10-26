import React from 'react';
import './HorizontalCard2.css';

const HorizontalCard2 = () => {
  return (
    <section className="horizontal-card-2">
      <div className="container">
        <div className="card-content">
          <div className="card-graphic">
            <div className="image-container">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Analytics Dashboard" className="dashboard-image" />
            </div>
          </div>
          <div className="card-text">
            <h2 className="card-title">Horizontal Card</h2>
            <p className="card-description">
              Horizontal card description, mentioning the feature information. A multiline info, can state whatever info about the feature.
            </p>
            <button className="card-button">button text</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalCard2;

