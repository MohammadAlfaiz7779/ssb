import React from 'react'
import "./Accessories.css"
import img from "../images/blogbox/b1.jpg";
import wishlist from "../images/img/heart.png";
import ProductCarousel from '../Component/ProductCarousel';
import { accessoriesapi } from '../Service/apiservice'
const Accessories = () => {
    return (
        <div className="accessories">
            <div className="accessories-heading">
                <p>Accessories</p>
            </div>
            <div className="accessories-product-card">
            {
            accessoriesapi.map(v => {
                return (
                <div className='accessories-card'>
                    <div className="accessories-img">
                        <img src={v.image}/>
                    </div>
                    <div className="accessories-title">
                        <p className='accessories-name'>{v.title}</p>
                        <div className="title-right">
                            <img src={wishlist} />
                            <p className='accessories-price'>${v.price}</p>
                        </div>
                    </div>
                </div>
                )
            })
        }
            </div>

            
            <ProductCarousel/>
        </div>
    )
}

export default Accessories