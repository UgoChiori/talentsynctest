import React from "react";
import LayoutOneLeft from "../constants/LayoutOneLeft";
import "./layoutone.css";
import Avatar from "../constants/Avatar";
import LayoutFooter from "../constants/LayoutFooter";
import NavigationBar from "./NavigationBar";

const LayoutOne: React.FC = () => {
  return (
    
    <div className="layout-one-wrapper">
      <div style={{position:"absolute", width:"704px", height:"720px", backgroundImage:"url(/images/Rows.png)" , zIndex:"1", top:"-40px"}}>

</div>
      <NavigationBar />
      <div className="layout-one-first-container">
        <LayoutOneLeft />
        <Avatar />
      </div>
      <LayoutFooter />
      
    </div>
  );
};

export default LayoutOne;



