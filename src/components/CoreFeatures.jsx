import React from 'react';
import './CoreFeatures.css';

const CoreFeatures = () => {
  const features = [
    {
      id: 1,
      title: 'Multi-Tenant Management',
      description: 'Effortlessly manage multiple business entities under one roof.',
      icon: '🏢',
      color: '#6c757d'
    },
    {
      id: 2,
      title: 'Real-Time Payments & Settlements',
      description: 'Experience instant transactions and seamless settlements.',
      icon: '💳',
      color: '#0066cc'
    },
    {
      id: 3,
      title: 'Global Insights',
      description: 'Gain valuable insights into your global payment operations.',
      icon: '📊',
      color: '#ff6b6b'
    },
    {
      id: 4,
      title: 'Secure & Compliant',
      description: 'Trust in our top-notch security measures and compliance standards.',
      icon: '🔒',
      color: '#51cf66'
    }
  ];

  return (
    <section className="core-features">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">Core features</h2>
        </div>
        
        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon" style={{ backgroundColor: feature.color }}>
                <span className="icon-emoji">{feature.icon}</span>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <a href="#" className="learn-more">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;

