import React from 'react';
import './HorizontalCard.css';

const HorizontalCard = () => {
  return (
    <section className="horizontal-card">
      <div className="container">
        <div className="card-content">
          <div className="card-text">
            <h2 className="card-title">Horizontal Card</h2>
            <p className="card-description">
              Horizontal card description, mentioning the feature information. A multiline info, can state whatever info about the feature.
            </p>
            <button className="card-button">learn more</button>
          </div>
          <div className="card-graphic">
            <div className="dashboard-interface">
              <div className="dashboard-header">
                <h3>Dashboard</h3>
                <div className="dashboard-icons">
                  <span className="icon">⊞</span>
                  <span className="icon">👤</span>
                  <span className="icon">⚙️</span>
                </div>
              </div>
              <div className="dashboard-cards">
                <div className="dashboard-card global">
                  <h4>Global Transactions</h4>
                  <div className="world-map">🌍</div>
                </div>
                <div className="dashboard-card analytics">
                  <h4>Tenant Analytics</h4>
                  <div className="charts">
                    <div className="line-chart">📈</div>
                    <div className="bar-chart">📊</div>
                  </div>
                </div>
                <div className="dashboard-card transactions">
                  <h4>Total Transactions</h4>
                  <div className="amount">12,345</div>
                  <div className="change positive">+5.2%</div>
                </div>
                <div className="dashboard-card security">
                  <h4>Security</h4>
                  <div className="lock-icon">🔒</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalCard;

