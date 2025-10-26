import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <span className="logo-text">Logo</span>
            <div className="logo-icon"></div>
          </div>
          <div className="footer-copyright">
            <p>&copy; 2025 Sony Interactive Entertainment</p>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-link-list">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/company">Our Company</Link></li>
              <li><Link to="/history">Company History</Link></li>
              <li><Link to="/business">Business Data & Sales</Link></li>
              <li><Link to="/innovation">Innovation</Link></li>
              <li><Link to="/careers" className="external">Careers <span>Opens an external website</span></Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">News & Media</h4>
            <ul className="footer-link-list">
              <li><Link to="/newsroom">Newsroom</Link></li>
              <li><Link to="/blog">SIE.Blog</Link></li>
              <li><Link to="/tech-blog">Tech.Blog</Link></li>
              <li><Link to="/press">Press Releases</Link></li>
              <li><Link to="/assets">Asset Library</Link></li>
              <li><Link to="/media" className="external">Media Inquiries <span>Opens an external website</span></Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Impact</h4>
            <ul className="footer-link-list">
              <li><Link to="/impact">Impact</Link></li>
              <li><Link to="/accessibility">Accessibility</Link></li>
              <li><Link to="/safety">Online Safety</Link></li>
              <li><Link to="/diversity">Diversity & Beyond</Link></li>
              <li><Link to="/environment">Environment</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/supply">Responsible Supply Chain</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
