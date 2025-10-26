import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Sony WH-1000XM5',
      category: 'Headphones',
      price: '$399.99',
      image: '/product-placeholder.jpg',
      description: 'Industry-leading noise canceling with Dual Noise Sensor technology'
    },
    {
      id: 2,
      name: 'Sony A7 IV',
      category: 'Camera',
      price: '$2,499.99',
      image: '/product-placeholder.jpg',
      description: '33MP full-frame mirrorless camera with advanced autofocus'
    },
    {
      id: 3,
      name: 'Sony PlayStation 5',
      category: 'Gaming',
      price: '$499.99',
      image: '/product-placeholder.jpg',
      description: 'Next-generation gaming console with ultra-high speed SSD'
    },
    {
      id: 4,
      name: 'Sony BRAVIA XR A95K',
      category: 'TV',
      price: '$2,999.99',
      image: '/product-placeholder.jpg',
      description: '4K OLED TV with Cognitive Processor XR'
    }
  ];

  return (
    <div className="products-page">
      <div className="container">
        <div className="products-header">
          <h1 className="products-title">Our Products</h1>
          <p className="products-subtitle">
            Discover Sony's innovative technology and premium quality products
          </p>
        </div>
        
        <div className="products-filter">
          <button className="filter-btn active">All Products</button>
          <button className="filter-btn">Audio</button>
          <button className="filter-btn">Cameras</button>
          <button className="filter-btn">Gaming</button>
          <button className="filter-btn">TVs</button>
        </div>
        
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <div className="product-placeholder">
                  <h4>{product.name}</h4>
                </div>
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

