import React from 'react';
import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Our Consulting</h3>
          <p>
            That started from this tropic port aboard this tiny ship today still want by theam government they survive on up to there east side to a deluxe as soldiers of arctics fortune.
          </p>
          <p>Any Queries: <a href="tel:+1234567900">(+1) 234 567 900</a></p>
        </div>
        <div className="footer-section">
          <h3>Recent Posts</h3>
          <ul>
            <li>Till wanted by theam govern they survive as soldiers. - Feb 06, 2018</li>
            <li>World don't move to beat of just one drum. - Mar 20, 2018</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Solutions</h3>
          <ul>
            <li>Travel and Aviation</li>
            <li>Business Services</li>
            <li>Consumer Products</li>
            <li>Financial Services</li>
            <li>Software Research</li>
            <li>Quality Resourcing</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyrights 2018. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;