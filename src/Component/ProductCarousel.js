import React, { Fragment } from 'react'
import "./ProductCarousel.css"
import Carousel from 'react-elastic-carousel';
import img from "../images/blogbox/b1.jpg";
import { relatedproductcarousel } from '../Service/apiservice'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const ProductCarousel = () => {
    return (

        <Fragment>
            <section>
                <div className="row">
                    <div className="related-products">
                        <p>Related Products</p>
                    </div>
                    <Carousel breakPoints={breakPoints}>
                        {
                            relatedproductcarousel.map(v => {
                                return (
                                    <div className='product-card'>
                                        <div className="product-img">
                                            <img src={v.image} />
                                        </div>
                                        <div className="product-title">
                                            <p className='product-name'>{v.title}</p>
                                            <p className='product-price'>${v.price}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </section>
        </Fragment>
    )
}

export default ProductCarousel