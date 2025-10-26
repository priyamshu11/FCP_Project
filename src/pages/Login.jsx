import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirect');
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Handle login logic here
    
    // After successful login, redirect to the intended page
    if (redirectTo === 'resources') {
      navigate('/resources');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-container">
          <div className="login-form-wrapper">
            <div className="login-logo">
              <img src="/src/Assets/sony-logo-png-transparent.png" alt="Sony" className="logo-img" />
            </div>
            <h6 className="login-title">Sign In</h6>
            <p className="login-subtitle">Access your account and manage your products</p>
            
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                />
              </div>
              
              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Remember me
                </label>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              </div>
              
              <button type="submit" className="btn btn-primary login-btn">
                Sign In
              </button>
            </form>
            
            <div className="login-footer">
              <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
            </div>
          </div>
          
          <div className="login-image">
            <div className="login-placeholder">
              <h3>Sony Account</h3>
              <p>Connect with the Sony ecosystem</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

