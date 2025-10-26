import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CoreFeatures from './components/CoreFeatures';
import HorizontalCard from './components/HorizontalCard';
import HorizontalCard2 from './components/HorizontalCard2';
import HorizontalCard3 from './components/HorizontalCard3';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Balances from './pages/Balances';
import Transactions from './pages/Transactions';
import Customers from './pages/Customers';
import Catalogue from './pages/Catalogue';
import Products from './pages/Products';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Settings from './pages/Settings';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  const isDashboardPage = ['/dashboard', '/balances', '/transactions', '/customers', '/catalogue', '/settings'].includes(location.pathname);
  
  return (
    <div className="App">
      {!isDashboardPage && <Navbar />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <CoreFeatures />
              <HorizontalCard />
              <HorizontalCard2 />
              <HorizontalCard3 />
              <FAQ />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/balances" element={<Balances />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/products" element={<Products />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      {!isDashboardPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
