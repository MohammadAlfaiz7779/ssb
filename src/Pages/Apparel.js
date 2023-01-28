import React, { Fragment } from 'react'
import "./Apparel.css"
import img from "../images/blogbox/b1.jpg";
import wishlist from "../images/img/heart.png";
import ProductCarousel from '../Component/ProductCarousel';
import { apparelapi } from "../Service/apiservice";


const Apparel = () => {
    return (
        <div className="apparel">
            <div className="apparel-heading">
                <p>Apparel</p>
            </div>
            <div className="apparel-product-card">
                {
                    apparelapi.map(v => {
                        return (
                            <div className='apparel-card'>
                                <div className="apparel-img">
                                    <img src={v.image} />
                                </div>
                                <div className="apparel-title">
                                    <p className='apparel-name'>{v.title}</p>
                                    <div className="title-right">
                                        <img src={wishlist} />
                                        <p className='apparel-price'>${v.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <ProductCarousel />
        </div>
    )
}

export default Apparel;