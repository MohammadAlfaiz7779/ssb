import React from 'react'
import Topbar from '../Component/Topbar'
import Carousel from '../Component/Carousel'
import Productcard from '../Component/Productcard'
import "./Home.css"
import { apparelproduct } from '../Service/apiservice'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// 4-box images 
import b1 from "../images/blogbox/b5.jpg";
import b2 from "../images/blogbox/b6.jpg";
import b3 from "../images/blogbox/b7.jpeg";
import b4 from "../images/blogbox/b8.jpg";
// banner 
import i1 from "../images/banner/i6.jpg";
import i2 from "../images/banner/i18.jpg";
import i3 from "../images/banner/i19.jpg";


const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='home'>
      <Topbar/>
      <Carousel />
    

      <div className='section'>
        <div className='product-section-heading'>
          <p>New Arrivals</p>
        </div>
        <Slider className='slider'{...settings}>
        {
            apparelproduct.map((v, i) => {
              return (
                <div>
                  <Productcard img={v.image} title={v.title} price={v.saleprice} issale={v.issale} />
                </div>
              )
            })
          }  
        </Slider>
      </div>

      <div className="blog-banner">
        <img src={i1}/>
      </div>

      <div className='section'>
        <div className='product-section-heading'>
          <p>Eatery</p>
        </div>
        <Slider {...settings}>
        {
            apparelproduct.map((v, i) => {
              return (
                <div>
                  <Productcard img={v.image} title={v.title} price={v.saleprice} issale={v.issale} />
                </div>
              )
            })
          }  
        </Slider>
      </div>

      <div className='section'>
        <div className='product-section-heading'>
          <p>Apparel</p>
        </div>
        <Slider {...settings}>
        {
            apparelproduct.map((v, i) => {
              return (
                <div>
                  <Productcard img={v.image} title={v.title} price={v.saleprice} issale={v.issale} />
                </div>
              )
            })
          }  
        </Slider>
      </div>

      <div className='section'>
        <div className='product-section-heading'>
          <p>Tools & Home</p>
        </div>
        <Slider {...settings}>
        {
            apparelproduct.map((v, i) => {
              return (
                <div>
                  <Productcard img={v.image} title={v.title} price={v.saleprice} issale={v.issale} />
                </div>
              )
            })
          }  
        </Slider>
      </div>

      <div className='section'>
        <div className='product-section-heading'>
          <p>Accessories</p>
        </div>
        <Slider {...settings}>
        {
            apparelproduct.map((v, i) => {
              return (
                <div>
                  <Productcard img={v.image} title={v.title} price={v.saleprice} issale={v.issale} />
                </div>
              )
            })
          }  
        </Slider>
      </div>

      <div className='section'>
        <div className='product-section-heading'>
          <p>Kitchen</p>
        </div>
        <Slider {...settings}>
        {
            apparelproduct.map((v, i) => {
              return (
                <div>
                  <Productcard img={v.image} title={v.title} price={v.saleprice} issale={v.issale} />
                </div>
              )
            })
          }  
        </Slider>
      </div>


      <div className="blog-box">
        <img src={b1} alt="" />
        <img src={b2} alt="" />
        <img src={b3} alt="" />
        <img src={b4} alt="" />
      </div>


      <div className='section'>
        <div className='product-section-heading'>
          <p>Trendy Products</p>
        </div>
        <Slider {...settings}>
        {
            apparelproduct.map((v, i) => {
              return (
                <div>
                  <Productcard img={v.image} title={v.title} price={v.saleprice} issale={v.issale} />
                </div>
              )
            })
          }  
        </Slider>
      </div>

      <div className="home-bottom-banner">
        <img src={i2}/>
      </div>
      <div className="home-bottom-banner">
        <img src={i3}/>
      </div>



    </div>
  )
}

export default Home