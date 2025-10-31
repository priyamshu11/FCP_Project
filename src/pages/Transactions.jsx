import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardNavbar from '../components/DashboardNavbar';
import './Transactions.css';

const Transactions = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSidebarToggle = (collapsed) => {
    setIsCollapsed(collapsed);
  };

  return (
    <div className="transactions-page">
      <Sidebar onToggle={handleSidebarToggle} />
      <div
        className="main-content"
        style={{
          marginLeft: isCollapsed ? "64px" : "244px",
          paddingTop: "64px",
          width: isCollapsed ? "calc(100vw - 64px)" : "calc(100vw - 244px)",
          transition: "all 0.3s ease",
        }}
      >
        <DashboardNavbar isCollapsed={isCollapsed} />
        <div className="transactions-content-wrapper">
        <div className="transactions-header">
          <h1 className="transactions-title">Transactions</h1>
          <p className="transactions-subtitle">View and manage all your transactions</p>
        </div>

        <div className="transactions-content">
          <div className="filters-section">
            <div className="filter-group">
              <label>Date Range</label>
              <select className="filter-select">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Status</label>
              <select className="filter-select">
                <option>All</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Type</label>
              <select className="filter-select">
                <option>All</option>
                <option>Payment</option>
                <option>Refund</option>
                <option>Transfer</option>
              </select>
            </div>
          </div>

          <div className="transactions-table">
            <div className="table-header">
              <div>ID</div>
              <div>Date</div>
              <div>Description</div>
              <div>Amount</div>
              <div>Status</div>
              <div>Actions</div>
            </div>
            <div className="table-row">
              <div>No transactions found</div>
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
    </div>
  );
};

export default Transactions;
