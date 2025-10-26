import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardNavbar from '../components/DashboardNavbar';
import './Catalogue.css';

const Catalogue = () => {
  return (
    <div className="catalogue-page">
      <Sidebar />
      <DashboardNavbar />
      <div className="catalogue-content-wrapper">
        <div className="catalogue-header">
          <h1 className="catalogue-title">Product Catalogue</h1>
          <p className="catalogue-subtitle">Manage your product inventory and pricing</p>
        </div>

        <div className="catalogue-content">
          <div className="product-grid">
            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">📦</div>
              </div>
              <div className="product-info">
                <h3>Sample Product</h3>
                <p className="product-description">A sample product for demonstration</p>
                <div className="product-price">$0.00</div>
                <div className="product-status">In Stock</div>
              </div>
            </div>
          </div>

          <div className="add-product-section">
            <button className="add-product-btn">
              + Add New Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
