import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardNavbar from '../components/DashboardNavbar';
import './Customers.css';

const Customers = () => {
  return (
    <div className="customers-page">
      <Sidebar />
      <DashboardNavbar />
      <div className="customers-content-wrapper">
        <div className="customers-header">
          <h1 className="customers-title">Customers</h1>
          <p className="customers-subtitle">Manage your customer relationships</p>
        </div>

        <div className="customers-content">
          <div className="customers-stats">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <div className="stat-number">0</div>
                <div className="stat-label">Total Customers</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🆕</div>
              <div className="stat-content">
                <div className="stat-number">0</div>
                <div className="stat-label">New This Month</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <div className="stat-content">
                <div className="stat-number">$0.00</div>
                <div className="stat-label">Total Revenue</div>
              </div>
            </div>
          </div>

          <div className="customers-table">
            <div className="table-header">
              <div>Name</div>
              <div>Email</div>
              <div>Join Date</div>
              <div>Total Spent</div>
              <div>Status</div>
              <div>Actions</div>
            </div>
            <div className="table-row">
              <div>No customers yet</div>
              <div>-</div>
              <div>-</div>
              <div>-</div>
              <div>-</div>
              <div>-</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
