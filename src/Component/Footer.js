import React from 'react';
import "./Footer.css";
import logo from "../images/RVlogo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-logo'>
        <img src={logo} alt="" />
      </div>

      <div className="footer-section">
        <div className="footermenu">
          <span>CUSTOMER SERVICE</span>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Track Order</a>
            </li>
            <li>
              <a href="#">Return Order</a>
            </li>
            <li>
              <a href="#">Cancel Order</a>
            </li>
          </ul>
        </div>

        <div className="footermenu">
          <span>COMPANY</span>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footermenu">
          <span>CONNECT WITH US </span>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ul>
        </div>

        <div className="footermenu">
          <span>KEEP UP TO DATE</span>
          <div className="mail">
            <input type="text" placeholder='Enter Email Id' />
            <p>SUBSCRIBE</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer;