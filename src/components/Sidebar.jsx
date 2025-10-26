import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState({});
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

  const toggleExpanded = (item) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  const mainNavItems = [
    { name: 'Home', icon: '🏠', path: '/dashboard' },
    { name: 'Balances', icon: '📊', path: '/balances' },
    { name: 'Transactions', icon: '🔄', path: '/transactions' },
    { name: 'Customers', icon: '👤', path: '/customers' },
    { name: 'Product catalogue', icon: '📦', path: '/catalogue' }
  ];

  const productItems = [
    { name: 'Payments', icon: '💳', hasDropdown: true },
    { name: 'Billing', icon: '🧾', hasDropdown: true },
    { name: 'Reporting', icon: '📊', hasDropdown: true },
    { name: 'More', icon: '⋯', hasDropdown: true }
  ];

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className={`business-selector ${isAccountDropdownOpen ? 'dropdown-open' : ''}`} onClick={toggleAccountDropdown}>
          <div className="business-icon">N</div>
          {!isCollapsed && (
            <>
              <div className="business-info">
                <div className="business-name">New business sandbox</div>
                <div className="business-subtitle">New business</div>
              </div>
              <div className="dropdown-arrow">⌄</div>
            </>
          )}
        </div>
        
        {!isCollapsed && isAccountDropdownOpen && (
          <div className="account-dropdown">
            <div className="dropdown-header">
              <div className="account-icon-large">N</div>
              <div className="account-info-large">
                <div className="account-name-large">New business sandbox</div>
                <div className="account-subtitle-large">New business</div>
              </div>
              <button className="exit-sandbox-btn">Exit sandbox</button>
            </div>
            
            <div className="dropdown-divider"></div>
            
            <div className="dropdown-section">
              <div className="dropdown-item">
                <span className="dropdown-icon">⚙️</span>
                <span className="dropdown-text">Settings</span>
              </div>
              <div className="dropdown-item">
                <span className="dropdown-icon">📦</span>
                <span className="dropdown-text">Switch sandbox</span>
                <span className="dropdown-arrow-right">›</span>
              </div>
            </div>
            
            <div className="dropdown-divider"></div>
            
            <div className="dropdown-section">
              <div className="dropdown-item">
                <span className="dropdown-icon">🏪</span>
                <span className="dropdown-text">Other accounts</span>
                <span className="dropdown-arrow-right">›</span>
              </div>
            </div>
            
            <div className="dropdown-divider"></div>
            
            <div className="dropdown-section">
              <div className="dropdown-item">
                <span className="dropdown-icon">👤</span>
                <span className="dropdown-text">Priyamshu</span>
                <span className="info-icon">i</span>
              </div>
              <div className="dropdown-item">
                <span className="dropdown-icon">🚪</span>
                <span className="dropdown-text">Sign out</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          {mainNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className={`nav-icon icon-${item.name.toLowerCase().replace(' ', '-')}`}></span>
              {!isCollapsed && <span className="nav-text">{item.name}</span>}
            </Link>
          ))}
        </div>

        <div className="nav-section">
          {!isCollapsed && <div className="section-title">Products</div>}
          {productItems.map((item, index) => (
            <div key={item.name} className="nav-item-container">
              <div 
                className="nav-item"
                onClick={() => item.hasDropdown && toggleExpanded(item.name)}
              >
                <span className={`nav-icon icon-${item.name.toLowerCase()}`}></span>
                {!isCollapsed && <span className="nav-text">{item.name}</span>}
                {!isCollapsed && item.hasDropdown && (
                  <span className="dropdown-arrow">
                    {expandedItems[item.name] ? '⌃' : '⌄'}
                  </span>
                )}
              </div>
              {!isCollapsed && item.hasDropdown && expandedItems[item.name] && (
                <div className="dropdown-content">
                  <div className="dropdown-item">Sub-item 1</div>
                  <div className="dropdown-item">Sub-item 2</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="developers-section">
          <span className="dev-icon icon-developers"></span>
          {!isCollapsed && <span className="dev-text">Developers</span>}
        </div>
        <button 
          className="collapse-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? '›' : '‹'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
