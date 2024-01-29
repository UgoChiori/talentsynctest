import React from "react";
import "./layoutfive.css";

const LayoutFive: React.FC = () => {
  return (
    <div className="layoutfive-wrapper">
      <div className="layoutfive-container">
        <h2>Ready to clear the path to perfect communication?</h2>
       
       
       <div className="check-list">
       <span>
          <img src="/images/check-icon.svg" alt="checkmark" />
          <p>30 days free trial</p>
          </span>
       
        <span className="checkmark-item">
          <img src="/images/check-icon.svg" alt="checkmark" />
          <p>Cancel at any time</p>
        </span>
        <span className="checkmark-item">
          <img src="/images/check-icon.svg" alt="checkmark" />
          <p>Access to all features</p>
        </span>
        <span className="checkmark-item">
          <img src="/images/check-icon.svg" alt="checkmark" />
          <p>Personalized onboarding</p>
        </span>
       </div>
     
        <div id="nav-btn-wrapper">
          <button id="nav-talk-to-sales">Talk to sales</button>
          <button id="nav-signup">Sign up for free</button>
        </div>
      </div>
      <div className="screen-mockup">
        <img src="/images/screen-mockup.svg" alt="screen mockup" />
      </div>
    </div>
  );
};

export default LayoutFive;
