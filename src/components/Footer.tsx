import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    // Footer Component
    <div className="footer-wrapper">
      <div className="footer-container">
      
        <div className="footer-logo-box">
          <div className="logo-wrapper">
          <img src="/images/clearlinklogo.svg" alt="Clearlink Logo" />
          <img src="/images/ClearLink.svg" alt="ClearLink Text" />
          </div>
          <p>
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <div className="footer-title">
        <Link to="/product">Product</Link>
         <div className="footer-links">
         <p>Overview</p>
          <p>Features</p>
          <p>Solutions</p>
          <p>Tutorials</p>
          <p>Pricing</p>
         </div>
        </div>
        <div className="footer-title">
          <Link to="/company">Company</Link>
       
        <div className="footer-links">
        <p>About Us</p>
          <p>Careers</p>
          <p>Press</p>
          <p>News</p>
          <p>Contact</p>
        </div>
        </div>
        <div className="footer-title">
          <Link to="/resources">Resources</Link>
          <div className="footer-links">
          <p>Blog</p>
          <p>Events</p>
          <p>Help Centre</p>
          <p>Tutorials</p>
          <p>Support</p>
          </div>
        </div>
        <div className="footer-title">
          <Link to="/legal">Legal</Link>
          <div className="footer-links">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
          <p>Licenses</p>
          <p>Contact</p>
          </div>
          </div>
        <div className="footer-title-download">
          <Link to="/getapp">Get the app</Link>
          <div >
         <img src="/images/mobil-app-badge1.svg" alt="mobile app badge" />
          <img src="images/mobile-store-badge2.svg" alt="mobile app badge" />
        
          </div>
          </div>
          </div>
        <div id="footer-footer">
          <div className="footer-copyright">
            <p>© 2023 ClearLink. All rights reserved.</p>
          </div>
          <div className="footer-social-icons">
            <img src="/images/linkedin.svg" alt="linkedin icon" />
            <img src="/images/twitter.svg" alt="twitter icon" />
            <img src="/images/facebook.svg" alt="facebook icon" />
            <img src="/images/instagram.svg" alt="instagram" />
            <img src="/images/github.svg" alt="github icon" />
            <img src="/images/lozenge.svg" alt="youtube icon" />
          </div>
        </div>
     
    </div>
  );
};

export default Footer;
