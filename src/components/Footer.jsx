import React from 'react';
// import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import "../styles/Footer.css";
const date = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="footer">
      <div className='socialMedia'>
        {/* <Instagram />
        <Twitter />
        <Facebook />
        <LinkedIn/> */}
      </div>
      <p> &copy; {date} petroleum engineering</p>
    </div>
  )
}
export default Footer