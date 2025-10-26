import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardNavbar.css';

const DashboardNavbar = () => {
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate('/settings');
  };
  return (
    <div className="dashboard-navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search" className="search-input" />
          </div>
        </div>
        
        <div className="navbar-center">
          <div className="info-message">
            Sandboxes are the new way to test. <a href="#" className="learn-more">Learn more</a>
          </div>
        </div>
        
        <div className="navbar-right">
          <div className="navbar-icons">
            <button className="icon-btn">⊞</button>
            <button className="icon-btn">?</button>
            <button className="icon-btn">🔔</button>
            <button className="icon-btn" onClick={handleSettingsClick}>⚙️</button>
            <button className="icon-btn add-btn">+</button>
          </div>
          <div className="setup-guide">
            <button className="setup-btn">
              Setup guide
              <span className="loading-spinner">⟳</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
