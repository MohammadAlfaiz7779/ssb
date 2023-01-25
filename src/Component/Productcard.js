import React from 'react'
import i1 from '../images/product/apparel/a.jpg'
import './Productcard.css'

const Productcard = ({img,title,price,issale}) => {
  return (
    <div className='product-card'>
        <div className="product-img">
            <img src={img}/>
        </div>
        <div className="product-title">
            <p className='product-name'>{title}</p>
            <p className='product-price'>$500</p>
        </div>
    </div>
  )
}

export default Productcard