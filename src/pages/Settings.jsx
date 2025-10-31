import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardNavbar from '../components/DashboardNavbar';
import './Settings.css';

const Settings = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSidebarToggle = (collapsed) => {
    setIsCollapsed(collapsed);
  };
  const settingsData = {
    personal: [
      {
        title: "Personal details",
        description: "Contact information, password, authentication methods and your active sessions."
      },
      {
        title: "Communication preferences", 
        description: "Customise the emails, SMS, and push notifications you receive."
      },
      {
        title: "Developers",
        description: "Workbench, developer tools, and more."
      }
    ],
    account: [
      {
        title: "Business",
        description: "Account details, account health, public info, payouts, legal entity, custom domains, and more."
      },
      {
        title: "Team and security",
        description: "Team members, roles, account security, authorised apps, and shared resources."
      },
      {
        title: "Your plans",
        description: "Manage how you pay for Stripe services."
      },
      {
        title: "Compliance and documents",
        description: "PCI compliance, documents, and legacy exports."
      },
      {
        title: "Product previews",
        description: "Try out new features."
      },
      {
        title: "Perks",
        description: "Discounts on tools to run your startup."
      }
    ],
    product: [
      {
        title: "Billing",
        description: "Subscriptions, invoices, quotes, and customer portal."
      },
      {
        title: "Financial Connections",
        description: "Appearance, featured institutions, optimisations, and usage details."
      },
      {
        title: "Payments",
        description: "Checkout, payment methods, currency conversion, and more."
      },
      {
        title: "Radar",
        description: "Manage fraud protection and customisation capabilities for your account."
      },
      {
        title: "Sigma",
        description: "Manage your Sigma features."
      },
      {
        title: "Discover more features",
        description: "Boost revenue, manage finances, and more."
      }
    ]
  };

  return (
    <div className="dashboard-page">
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
        <div className="dashboard-content-wrapper">
        <div className="settings-page">
          <div className="settings-header">
            <h1></h1>
          </div>
          
          <div className="settings-content">
        <section className="settings-section">
          <h2>Personal settings</h2>
          <div className="settings-cards">
            {settingsData.personal.map((item, index) => (
              <div key={index} className="settings-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="settings-section">
          <h2>Account settings</h2>
          <div className="settings-cards">
            {settingsData.account.map((item, index) => (
              <div key={index} className="settings-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="settings-section">
          <h2>Product settings</h2>
          <div className="settings-cards">
            {settingsData.product.map((item, index) => (
              <div key={index} className="settings-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;