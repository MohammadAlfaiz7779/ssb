import React from 'react'
import "./Kitchen.css"
import img from "../images/blogbox/b1.jpg";
import wishlist from "../images/img/heart.png";
import ProductCarousel from '../Component/ProductCarousel';
import { kitchenapi } from '../Service/apiservice'


const Kitchen = () => {
    return (
        <div className="kitchen">
            <div className="kitchen-heading">
                <p>Kitchen</p>
            </div>
            <div className="kitchen-product-card">
                {
                    kitchenapi.map(v => {
                        return (
                            <div className='kitchen-card'>
                                <div className="kitchen-img">
                                    <img src={v.image} />
                                </div>
                                <div className="kitchen-title">
                                    <p className='kitchen-name'>{v.title}</p>
                                    <div className="title-right">
                                        <img src={wishlist} />
                                        <p className='kitchen-price'>${v.price}</p>
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

export default Kitchen