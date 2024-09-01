import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>Warehouse</h2>
          <p>Your reliable partner in storage and logistics, providing the best services tailored to your needs.</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="">About Us</Link></li>
            <li><Link to="">Services</Link></li>
            <li><Link to="">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <address>
            <p>123 Warehouse St., Cityville, ST 12345</p>
            <p>Email:support@warehouse.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Warehouse. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
