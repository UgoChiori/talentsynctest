import React from "react";
import "./layoutthree.css";

const LayoutThree: React.FC = () => {
  return (
    <div className="layoutthree-wrapper">
      <div className="layoutthree-container">
        <div className="layerthree-text">
          <img src="/images/shopify.svg" alt="shopify" />
          <div className="rating-container">
            <img src="/images/star-icon.svg" alt="rating stars" />
            <img src="/images/star-icon.svg" alt="rating stars" />
            <img src="/images/star-icon.svg" alt="rating stars" />
            <img src="/images/star-icon.svg" alt="rating stars" />
            <img src="/images/star-icon.svg" alt="rating stars" />
          </div>
          <h2>
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </h2>
         <div className="layout-three-footer">
         <div className="sara-avi">
            <img src="/images/sarah.svg" alt="avatar" />
            <div>
            <p id="sara">Sarah Thompson</p>
           
           <p id="reviewer">Project Manager, Shopify</p>
            </div>
            </div>
           
            <div className="arrows">
            <img src="/images/carouselarrowleft.svg" alt="arrow left" />
            <img src="/images/testimonialarrowright.svg" alt="arrow right" />
          </div>
          
         </div>
        
        </div>
        <div className="images">
          <div className="images-one">
          <img src="/images/image1.svg" alt="person in picture" />
          <img src="/images/image2.svg" alt="person in picture" />
          </div>
          <div className="images-two">
          <img src="/images/image3.svg" alt="person in picture" />
          <img src="/images/image4.svg" alt="person in picture" />
          <img src="/images/image5.svg" alt="person in picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutThree;
