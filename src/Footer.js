import React from 'react';
import "./Footer.css";
import Logo from "./logo.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
        
      <img src={Logo} alt="" />
      
<div className="My-name">
      <h2>Made by</h2>
      <h4>HARSH KAUSHIK</h4>
      </div>
        </div>
    )
}

export default Footer
