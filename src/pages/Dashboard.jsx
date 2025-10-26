import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardNavbar from '../components/DashboardNavbar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <DashboardNavbar />
      <div className="dashboard-content-wrapper">
        <div className="dashboard-main">
          <div className="dashboard-header">
            <h1 className="dashboard-title">Dashboard</h1>
          </div>
          
          <div className="empty-dashboard">
            <div className="empty-state">
              <h2>Welcome to your Dashboard</h2>
              <p>Your dashboard is currently empty. Start by exploring the different sections in the sidebar.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;