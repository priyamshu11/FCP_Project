import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              One Portal. Endless Tenants...
            </h1>
            <p className="hero-description">
              Manage global business entities, transactions, and billing — all from one secure platform.
            </p>
            <div className="hero-button">
              <Link to="/contact" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
          <div className="hero-graphic">
            <div className="payment-interface">
              <div className="interface-header">
                <h3>Payment</h3>
              </div>
              <div className="security-icon">
                <div className="checkmark">✓</div>
              </div>
              <div className="payment-fields">
                <div className="field"></div>
                <div className="field"></div>
                <div className="field"></div>
              </div>
              <button className="confirm-btn">Confirm</button>
            </div>
            <div className="floating-icons">
              <div className="icon house">🏠</div>
              <div className="icon money">💰</div>
              <div className="icon bank">🏦</div>
              <div className="icon cart">🛒</div>
              <div className="icon car">🚗</div>
              <div className="icon medical">🏥</div>
              <div className="icon globe">🌐</div>
              <div className="icon piggy">🐷</div>
              <div className="icon currency">€$¥</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
