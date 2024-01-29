import React from "react";
import LayoutOneLeft from "../constants/LayoutOneLeft";
import "./layoutone.css";
import Avatar from "../constants/Avatar";
import LayoutFooter from "../constants/LayoutFooter";
import NavigationBar from "./NavigationBar";

const LayoutOne: React.FC = () => {
  return (
    
    <div className="layout-one-wrapper">
      <div className="layout-one-container" >

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



