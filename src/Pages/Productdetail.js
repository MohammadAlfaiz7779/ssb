import React,{useEffect,useState} from 'react'
import "./Productdetail.css"
import Qtytoggle from './Qtytoggle';
// import axios from 'axios';
import { useLocation } from 'react-router-dom';
import img from "../images/blogbox/b1.jpg";

import i5 from "../images/banner/i5.jpg";
import i6 from "../images/banner/ii1.png";
import ProductCarousel from '../Component/ProductCarousel';
const Productdetail = () => {
  
  // const location = useLocation();

  // const [pname, setpname] = useState();
  // const [pdesc, setpdesc] = useState();
  // const [pprice, setpprice] = useState();
  // const [psaleprice, setpsaleprice] = useState();
  // const [mainpimage, setmainpimage] = useState();
  // const [sideimage, setsideimage] = useState([]);


  // const [amount, setamount] = useState(1)
  // let stock = 5;

  // const setdecrease = () =>{
  //     amount>1 ? setamount(amount-1) : setamount(1);
  // }

  // const setincrease = () => {
  //     amount > stock ? setamount(amount):setamount(amount+1);
  // }

  // const getproductbyid=()=>{
  //     let formarray = new FormData();
  //     formarray.append('name',decodeURI(location.pathname.slice(10)));
  //     axios.post('http://localhost/sheer/api/products/productbyid',formarray).then(res=>{
  //         setpname(res.data.result.product_name);
  //         setpdesc(res.data.result.product_description);
  //         setpprice(res.data.result.product_price);
  //         setpsaleprice(res.data.result.product_saleprice);
  //         setmainpimage('http://192.168.0.9/sheer/public/uploads/product/'+res.data.result.sideimage[0].product_img);
  //         setsideimage(res.data.result.sideimage);
  //         console.log(res.data.result.sideimage);
  //     }).catch(err=>{

  //     })
  // }

  // const mainsrc=(m)=>{
  //     setmainpimage('http://192.168.0.9/sheer/public/uploads/product/'+m)
  // }

  
  // useEffect(() => {
  //     getproductbyid();
  // }, []);
  return (
    <div className='products-detail-page'>
      <div className='products-card'>
        <div className="product-pic">
          <div className="product-small-pic">
            <img src={img} alt="" />
            <img src={i5} alt="" />
            <img src={i6} alt="" />
            {/* {
              sideimage.map((v) => {
                return (
                  <img style={{ cursor: 'pointer' }} onClick={() => mainsrc(v.product_img)} src={'http://192.168.0.9/sheer/public/uploads/product/' + v.product_img} />
                )
              })
            } */}
          </div>
          <div className="product-large-pic">
            <img src={img} alt="" />
            {/* <img src={mainpimage} /> */}
          </div>
        </div>
        <div className="product-bio">
          <div className="product-title">
            Productdetail
            {/* {pname} */}
          </div>
          <div className="product-sale">
            sale
          </div>
          <div className="product-price">
            <div className="sale-price">
              Rs.100
              {/* Rs. {psaleprice} */}
            </div>
            <div className="mrp-price">
             Rs.1000
              {/* Rs. {pprice} */}
            </div>
          </div>
          <div className="addcart">
            <div className="qtyenter">

              {/* <Qtytoggle amount={amount} setdecrease={setdecrease} setincrease={setincrease} /> */}
            </div>
            <div className="cart-btn">
              Add To Cart
            </div>
          </div>
          <div className="product-description">
            <span>Description</span>
            <p className='product-dis'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis recusandae perspiciatis pariatur culpa fugit ullam accusantium, cum voluptatum illum repellendus error animi provident nostrum totam velit! Nam laudantium ea minus saepe. Ex velit omnis, veniam quia quos voluptatem hic perferendis tempora. Placeat doloribus eveniet deserunt ad officia enim sed necessitatibus?</p>
            {/* {pdesc} */}
          </div>
        </div>
      </div>

      <ProductCarousel/>
    </div>
  )
}

export default Productdetail