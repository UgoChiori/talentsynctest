import React from "react";
import "./layoutfooter.css";



const LayoutFooter:React.FC = () => {
  return (
    <div
    className="layoutfooter-wrapper"
    
  >
    <div className="layoutfooter-header"
     
    >
      <p>
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
    </div>
    <div className="layout-span">
      <span>
        <img src="/images/shopify.svg" alt="shopify" />
      </span>
      <span>
        <img src="/images/coinbase.svg" alt="coinbase" />
      </span>
      <span>
        <img src="/images/dropbox.svg" alt="dropbox" />
      </span>
      <span>
        <img src="/images/intercom.svg" alt="intercom" />
      </span>
      <span>
        <img src="/images/marvel.svg" alt="marvel" />
      </span>
      <span>
        <img src="/images/automatic.svg" alt="automattic" />
      </span>
    </div>
  </div>
  )
}

export default LayoutFooter