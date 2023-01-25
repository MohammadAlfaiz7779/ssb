import React from 'react'
import logo from "../images/RVlogo.png";
import logobag from "../images/Rlogobag.png";
import search from "../images/img/search.png";
import login from "../images/img/user.png";
import wishlist from "../images/img/heart.png";
import cart from "../images/img/cart.png";
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = ( ) => {
  return (
    <div className='Navbar'>
      <div className='navbar-left'>
      <div style={{cursor:'pointer'}} className='burger-menu'>
                        <div className='burger_line1'></div>
                        <div className='burger_line2'></div>
                        <div className='burger_line3'></div>
                    </div>
        <div className="nav-logo">
          <Link to={'/'}>
          <img className='logobag' src={logobag}/>
          <img className='logo' src={logo} />
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to={'/'} href="#">HOME</Link>
              <div className='underline' ></div>
            </li>
            <li>
              <Link to={'/aboutus'} href="#">ABOUT US</Link>
              <div className='underline' ></div>
            </li>
            <li>
              <Link to={'/Contactus'}>CONTACT US</Link>
              <div className='underline' ></div>
            </li>
            <li>
              <Link to={'/blog'} >BLOG</Link>
              <div className='underline' ></div>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-right">
        <div className="nav-search">
          <img className='img-search' src={search} />
          <input type="text" placeholder='search products,category,collection' />
        </div>
        <div className='devider' style={{width:'1px',height:'30px',background:'rgba(0,0,0,0.5)'}}></div>
        <div className="nav-icon">
          <img className='mob-search' src={search}/>
          <img src={login} />
          <img src={wishlist} />
          <img src={cart} />
        </div>
      </div>
    </div>
  )
}

export default Navbar