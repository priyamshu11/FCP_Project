import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardNavbar from '../components/DashboardNavbar';
import './Balances.css';

const Balances = () => {
  return (
    <div className="balances-page">
      <Sidebar />
      <DashboardNavbar />
      <div className="balances-content-wrapper">
        <div className="balances-main">
          <div className="balances-header">
            <h1 className="balances-title">Balances US$0.00</h1>
            <button className="manage-payouts-btn">Manage payouts ▼</button>
          </div>

          <div className="info-banner">
            <span className="banner-icon">⭐</span>
            <span className="banner-text">New You can now choose to settle and pay out funds in CAD, EUR, or GBP.</span>
            <a href="#" className="banner-link">Manage currencies</a>
            <button className="banner-close">×</button>
          </div>

          <div className="balance-summary">
            <h2 className="summary-title">Balance summary</h2>
            <div className="summary-table">
              <div className="table-header">
                <div className="header-cell">Payments type</div>
                <div className="header-cell">Amount</div>
              </div>
              <div className="table-row">
                <div className="row-cell">
                  <div className="payment-type">
                    <div className="type-icon incoming">●</div>
                    <span>Incoming</span>
                  </div>
                </div>
                <div className="row-cell">US$0.00</div>
              </div>
              <div className="table-row">
                <div className="row-cell">
                  <div className="payment-type">
                    <div className="type-icon available">●</div>
                    <span>Available</span>
                  </div>
                </div>
                <div className="row-cell">US$0.00</div>
              </div>
            </div>
          </div>

          <div className="recent-activity">
            <h2 className="activity-title">Recent activity</h2>
            <div className="activity-tabs">
              <button className="tab active">Payouts</button>
              <button className="tab">Top-ups</button>
              <button className="tab">All activity</button>
            </div>
            <div className="activity-content">
              <div className="empty-state">
                <p>No payouts were found</p>
              </div>
            </div>
          </div>
        </div>

        <div className="balances-sidebar">
          <div className="reports-section">
            <h3 className="reports-title">Reports</h3>
            <div className="report-links">
              <a href="#" className="report-link">
                <span className="report-icon">📊</span>
                <span>Balance summary Sept 2025</span>
              </a>
              <a href="#" className="report-link">
                <span className="report-icon">↕️</span>
                <span>Payout reconciliation Sept 2025</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balances;
