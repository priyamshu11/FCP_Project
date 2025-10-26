import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is this platform used for?",
      answer: "This platform is designed to manage global business entities, transactions, and billing from one secure portal. It helps businesses streamline their multi-tenant operations and payment processing."
    },
    {
      question: "Who can use the platform?",
      answer: "The platform is designed for businesses that need to manage multiple entities, handle global transactions, and require comprehensive billing solutions. It's suitable for enterprises, financial institutions, and businesses with complex operational structures."
    },
    {
      question: "How does tenant onboarding work?",
      answer: "Tenant onboarding is a streamlined process that allows you to add new business entities to your account. Simply navigate to the tenant management section, click 'Add New Tenant', and follow the guided setup process."
    },
    {
      question: "Can I view global and regional sales separately?",
      answer: "Yes, our platform provides comprehensive analytics that allow you to view sales data by region, country, or globally. You can filter reports by specific time periods and geographical areas."
    },
    {
      question: "What kind of security features are included?",
      answer: "Our platform includes enterprise-grade security features including end-to-end encryption, multi-factor authentication, role-based access controls, and compliance with international security standards."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="container">
        <div className="faq-header">
          <h1 className="faq-title">Frequently Asked Questions (FAQ's)</h1>
        </div>
        
        <div className="faq-content">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
                <div 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{faq.question}</h3>
                  <div className="faq-icon">
                    <span className="chevron">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </div>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
