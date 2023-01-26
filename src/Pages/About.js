import React from 'react'
import "./About.css"
import image from "../images/blogbox/b1.jpg"



const About = () => {
  return (

    <div className='About-page'>
      <div className="about-heading">
        <p>OUR VISION</p>
        <p className='about-head'>SASTA SUPER BAZAR PLATFORM THAT PROVIDE YOU A BEST QUALITY & AFFORDABLE PRODUCTS AT THE SAME TIME.</p>
      </div>
      <div className='container'>
        <div className="about-card">
          <div className="col-6">
            <img src={image} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div className="col-6">
            <p className='title'>SASTA SUPER BAZAR PLATFORM THAT PROVIDE YOU A BEST QUALITY & AFFORDABLE PRODUCTS AT THE SAME TIME.</p>
            <p>We are pleased to have you visit SASTASUPERBAZAR, Skin Luxury, where Natural Botanicals and Scientific Research manifest to be the source of your Beauty. SASTASUPERBAZAR lays the groundwork for understanding the possibilities of   famous eatery products of ujjain combined with beauty,apperal,gadgets,etc products. We make sure that our eadible products FSSAI registered pass all necessary inspections and adhere to the safety requirements you demand. We adhere to strict, extremely safe standards. Everyone can benefit from SASTASUPERBAZAR’s wide selection of essential EATERY/APPERAL/ACCESSORIES,ETC products thanks to their use of SPECIAL derived ingredients.</p>
            <p>limited products
              exclusive product
              exclusive design
              limited time sale on selected products
              our  sastasuperbazar store has initiative to sale exclusive products at lowest prices and  make customer happy by providing exclusive and quality products at the same time. We believe, a lot of salers sale old products but we believe in trendy and current time viral products.
              <span>we also sale our products at Amazon Flipkart Myntra misho etsy </span>
              TIME TO GET YOURS YOU WON'T REGRET IT MAKE AN ORDER NOW
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About