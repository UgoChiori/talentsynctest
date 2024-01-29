import React from "react";
import "./layoutfour.css";

const LayoutFour: React.FC = () => {
  return (
    <div className="layout-four-wrapper">
      <div className="layout-four-container">
        <div className="layout-four-left">
          <p>Support</p>
          <h1>FAQs</h1>
          <h5>
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please{" "}
            <a href="#" className="hyperlink">
              chat to our friendly team.
            </a>
          </h5>
        </div>
        <div className="layout-four-right">
          <div className="faqs-header-wrap">
            <div className="faqs-header">
              <div className="faqs-header-title">
              <h1 >How many participants can join a ClearLink video conference?</h1>
          <img src="/images/minus-circle.svg" alt="checkmark"/>
              </div>
          
          <p>
            ClearLink offers flexible meeting options. Depending on your
            subscription plan, you can host meetings with varying numbers of
            participants. Our plans are designed to accommodate small team
            collaborations and large-scale webinars, ensuring you have the right
            fit for your needs.
          </p>
          </div>
            </div>
          <div className="faqs-container">
            <div className="faqs">
              <div className="faqs-title">
              <h2>Can I use ClearLink on multiple devices?</h2>
              <img src="/images/plus-circle.svg" alt="checkmark" style={{cursor: "pointer"}} />
        
              </div>
              
            </div>
            <div className="faqs">
              <div className="faqs-title">
              <h2>
                Is ClearLink compatible with other video conferencing platforms?
              </h2>
              <img src="/images/plus-circle.svg" alt="checkmark" />
              </div>
              
            </div>
            <div className="faqs">
              <div className="faqs-title">
              <h2>
                How does ClearLink ensure the security of my video conferences?
              </h2>
              <img src="/images/plus-circle.svg" alt="checkmark" style={{cursor: "pointer"}} />
              </div>
             
            </div>
            <div className="faqs">
              <div className="faqs-title">
              <h2>Do I need to download any software to use ClearLink?</h2>
              <img src="/images/plus-circle.svg" alt="checkmark" style={{cursor: "pointer"}} />
           
              </div>
            </div>

            <div className="faqs">
             <div className="faqs-title">
             <h2>What kind of customer support does ClearLink provide?</h2>
              <img src="/images/plus-circle.svg" alt="checkmark" style={{cursor: "pointer"}} />
             </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutFour;
