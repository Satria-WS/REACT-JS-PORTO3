import React from 'react';
import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className='socialMedia'>
        <Instagram />
        <Twitter />
        <Facebook />
        <LinkedIn/>
      </div>
      <p> &copy; 2023 petroleum engineering</p>
    </div>
  )
}
export default Footer