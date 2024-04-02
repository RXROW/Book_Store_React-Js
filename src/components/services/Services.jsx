import React from 'react';
import './services.css'
const Services = () => {
  return (
    <div className='services'>
      <div className="services-item">
        <i className="bi bi-truck"></i>
        <span>Free Shipping</span>
      </div>
      <div className="services-item">
        <i className="bi bi-gift"></i>
        <span>Gift Cart</span>
      </div>
      <div className="services-item">
        <i className="bi bi-arrow-clockwise"></i>
        <span>7 days Return</span>
      </div>
      <div className="services-item">
        <i className="bi bi-send"></i>
        <span>Contact Us</span>
      </div>
     
    </div>
  );
}

export default Services;
