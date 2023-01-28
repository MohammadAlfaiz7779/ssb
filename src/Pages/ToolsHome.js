import React from 'react'
import "./ToolsHome.css"
import img from "../images/blogbox/b1.jpg";
import wishlist from "../images/img/heart.png";
import ProductCarousel from '../Component/ProductCarousel';
import { toolshomeapi } from "../Service/apiservice";
const ToolsHome = () => {
    return (
        <div className="toolhome">
            <div className="toolhome-heading">
                <p>Tool & Home</p>
            </div>
            <div className="toolhome-product-card">
                {
                    toolshomeapi.map(v => {
                        return (
                            <div className='toolhome-card'>
                                <div className="toolhome-img">
                                    <img src={v.image} />
                                </div>
                                <div className="toolhome-title">
                                    <p className='toolhome-name'>{v.title}</p>
                                    <div className="title-right">
                                        <img src={wishlist} />
                                        <p className='toolhome-price'>${v.price}</p>
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

export default ToolsHome