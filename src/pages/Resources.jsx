import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Resources.css';

const Resources = () => {
  const navigate = useNavigate();

  const handleAccessResource = () => {
    navigate('/login?redirect=resources');
  };

  const handleContactSupport = () => {
    navigate('/contact');
  };
  const resources = [
    {
      id: 1,
      title: 'Sony Product Manuals',
      type: 'Documentation',
      description: 'Comprehensive guides and manuals for all Sony products',
      icon: '📖'
    },
    {
      id: 2,
      title: 'Video Tutorials',
      type: 'Tutorials',
      description: 'Step-by-step video guides to help you get the most out of your Sony products',
      icon: '🎥'
    },
    {
      id: 3,
      title: 'Software Downloads',
      type: 'Software',
      description: 'Latest firmware updates and software for your Sony devices',
      icon: '💾'
    },
    {
      id: 4,
      title: 'Community Forum',
      type: 'Community',
      description: 'Connect with other Sony users and get expert advice',
      icon: '👥'
    },
    {
      id: 5,
      title: 'Technical Support',
      type: 'Support',
      description: 'Get help from our technical support team',
      icon: '🔧'
    },
    {
      id: 6,
      title: 'Warranty Information',
      type: 'Warranty',
      description: 'Learn about warranty coverage and service options',
      icon: '🛡️'
    }
  ];

  return (
    <div className="resources-page">
      <div className="container">
        <div className="resources-header">
          <h1 className="resources-title">Resources & Support</h1>
          <p className="resources-subtitle">
            Everything you need to get the most out of your Sony products
          </p>
        </div>
        
        <div className="resources-grid">
          {resources.map(resource => (
            <div key={resource.id} className="resource-card">
              <div className="resource-icon">
                {resource.icon}
              </div>
              <div className="resource-content">
                <span className="resource-type">{resource.type}</span>
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                <button className="btn btn-secondary resource-btn" onClick={handleAccessResource}>
                  Access Resource
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="resources-cta">
          <h2>Need More Help?</h2>
          <p>Our support team is here to assist you with any questions or issues.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={handleContactSupport}>Contact Support</button>
            <button className="btn btn-secondary">Live Chat</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;

