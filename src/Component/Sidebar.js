import React from 'react';
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="half-bar">
        <div className="login">
          <p className='heading'>Welcome Guest</p>
          <p className='sub-heading'>Login / Sign Up</p>
        </div>
        <div className="divider" style={{ width: '65%', height: '1px', background: 'rgba(0,0,0,0.5)', marginBottom: "20px" ,position:"absolute" }}></div>
        <div className="category">
          <span>SHOP IN</span>
          <ul>
            <li>
              <a href="#">Apperals</a>
            </li>
            <li>
              <a href="#">Eatry</a>
            </li>
            <li>
              <a href="#">Tools & Home Improvement</a>
            </li>
            <li>
              <a href="#">Gadgets</a>
            </li>
            <li>
              <a href="#">Best Sellers</a>
            </li>
            <li>
              <a href="#">New Arrivals</a>
            </li>
          </ul>
        </div>  
      </div>
    </div>
  )
}

export default Sidebar