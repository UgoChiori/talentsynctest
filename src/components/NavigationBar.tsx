import React from 'react'
import { Link } from 'react-router-dom';
import "./navigationbar.css"


const NavigationBar:React.FC = () => {
    // NavigationBar Component


return (
  <nav className="navigation-wrapper">
    <div className="logo-wrapper"> 
      <img src="/images/clearlinklogo.svg" alt="Clearlink Logo" />
      <img src="/images/ClearLink.svg" alt="ClearLink Text" />
    </div>
    <div className="nav-links">
  <div className="link-container">
    <Link to="/">Products</Link>
    <img src="/images/dropdown-icon.svg" alt="Dropdown Icon" />
  </div>

  <div className="link-container">
    <Link to="/solutions">Solutions</Link>
    <img src="/images/dropdown-icon.svg" alt="Dropdown Icon" />
  </div>

  <div className="link-container" id="resources-link">
    <Link to="/resources">Resources</Link>
    <img src="/images/dropdown-icon.svg" alt="Dropdown Icon" />
  </div>

  <div className="link-container">
    <Link to="/about">Pricing</Link>
   
  </div>
</div>

    {/* <div className="nav-links">
      <div className="link-container">
  <Link to="/">Products</Link>
  <img src="/images/dropdown-icon.svg" alt="Dropdown Icon" />
</div>

<div className="link-container">
  <Link to="/solutions">Solutions</Link>
  <img src="/images/dropdown-icon.svg" alt="Dropdown Icon" />
</div>

<div className="link-container">
  <Link to="/resources">Resources</Link>
  <img src="/images/dropdown-icon.svg" alt="Dropdown Icon" />
</div>

   
    <Link to="/pricing">Pricing</Link>
    </div> */}
    <div className="nav-btn-wrapper">
        <button id="nav-talk-to-sales">Talk to sales</button>
        <button id="nav-signup">Sign up for free</button>
    </div>
  </nav>
)

 
}

export default NavigationBar



 {/* <Link to="/">Products</Link>
    <img src="/images/dropdown-icon.svg" alt="Dropdown Icon" />
    <Link to="/solutions">Solutions</Link>
    <img src="/images/dropdown-icon.svg" alt="Dropdown Icon" />
    <Link to="/resources">Resources</Link>
    <img src="/images/dropdown-icon.svg" alt="Dropdown Icon" /> */}