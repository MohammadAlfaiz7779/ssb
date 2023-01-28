import React from 'react'
import { Link } from 'react-router-dom';
import i1 from "../images/banner/i1.png";
import i2 from "../images/banner/i2.png";
import i3 from "../images/banner/i3.jpg";
import i4 from "../images/banner/i4.jpg";
import i5 from "../images/banner/i5.jpg";
import i6 from "../images/banner/ii1.png";

import c1 from "../images/category/c1.jpg";
import c2 from "../images/category/c2.jpeg";
import c3 from "../images/category/c3.jpeg";
import c4 from "../images/category/c4.jpeg";
import c5 from "../images/category/c5.jpg";

import a from '../images/product/apparel/a.jpg'

export const carouselapi = [
    {
        "src": i1,
        "msrc": i6
    },
    {
        "src": i2,
        "msrc": i6
    },
    {
        "src": i3,
        "msrc": i6
    },
    {
        "src": i4,
        "msrc": i6
    },
    {
        "src": i5,
        "msrc": i6
    },
];
export const category = [

    {
        "id": "5",
        "Name": "New Arrivals",
        "img": c4
    },
    {
        "id": "5",
        "Name": "Bestsellers",
        "img": c4
    },
    {
        "id": "1",
        "Name": " Eatery",
        "img": c4
    },
    {
        "id": "5",
        "Name": "Apparel",
        "img": c1
    },
    {
        "id": "2",
        "Name": "Accessories",
        "img": c2,
        "": "Accessories"
    },
    {
        "id": "3",
        "Name": "Tools & Home",
        "img": c3
    },
    {
        "id": "4",
        "Name": "Kitchen",
        "img": c5,

    },

];

export const apparelproduct = [
    {
        "id": "1",
        "title": "chair for officer choice and offices only",
        "description": "",
        "price": "",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a
    },
    {
        "id": "1",
        "title": "chair for officer choice and offices only",
        "description": "",
        "price": "",
        "saleprice": "200",
        "issale": true,
        "stock": "10",
        "image": a
    },
    {
        "id": "1",
        "title": "chair for officer choice and offices only",
        "description": "",
        "price": "",
        "saleprice": "300",
        "issale": true,
        "stock": "10",
        "image": a
    },
    {
        "id": "1",
        "title": "chair for officer choice and offices only",
        "description": "",
        "price": "",
        "saleprice": "400",
        "issale": false,
        "stock": "10",
        "image": a
    },
    {
        "id": "1",
        "title": "chair for officer choice and offices only",
        "description": "",
        "price": "",
        "saleprice": "500",
        "issale": false,
        "stock": "10",
        "image": a
    },
];
export const relatedproductcarousel = [
    {
        "id": "1",
        "title": "related Product",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a
    }, {
        "id": "2",
        "title": "related Product",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a
    }, {

        "id": "3",
        "title": "related Product",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a
    }, {
        "id": "4",
        "title": "related Product",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a
    }, {
        "id": "5",
        "title": "related Product",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a
    },
];
export const kitchenapi = [
    {
        "id": "1",
        "title": "related Product",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a,
          "img": c5
    },{
        "id": "2",
        "title": "related Product",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a,
          "img": c5
    },{
        "id": "3",
        "title": "related Product",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a,
          "img": c5
    },{
        "id": "4",
        "title": "related Product",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a,
          "img": c5
    },{
        "id": "5",
        "title": "related Product",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a,
          "img": c5
    },{
        "id": "6",
        "title": "related Product",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a,
        "img": c5
    },{
        "id": "7",
        "title": "related Product",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a,
        "img": c5
    },

];
export const accessoriesapi = [
    {
        "id": "1",
        "title": "accessories",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a,
    },
    {
        "id": "2",
        "title": "accessories",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": c1,
    },
    {
        "id": "3",
        "title": "accessories",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a,
    },
    {
        "id": "4",
        "title": "accessories",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a,
    },
    {
        "id": "5",
        "title": "accessories",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a,
    },
    {
        "id": "6",
        "title": "accessories",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a,
    },
    {
        "id": "7",
        "title": "accessories",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a,
    },
    {
        "id": "8",
        "title": "accessories",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a,
    },
    {
        "id": "9",
        "title": "accessories",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a,
    },
    {
        "id": "10",
        "title": "accessories",
        "description": "",
        "price": "100",
        "saleprice": "100",
        "issale": true,
        "stock": "10",
        "image": a,
    },
];
export const apparelapi =[
    {
        "id":"1",
        "title":"Appare",
        "image":a,
        "price":"100"
    },
    {
        "id":"1",
        "title":"Appare",
        "image":c1,
        "price":"100"
    },
    {
        "id":"1",
        "title":"Appare",
        "image":c2,
        "price":"100"
    },
    {
        "id":"1",
        "title":"Appare",
        "image":a,
        "price":"100"
    },
    {
        "id":"1",
        "title":"Appare",
        "image":c3,
        "price":"100"
    },
    {
        "id":"1",
        "title":"Appare",
        "image":c4,
        "price":"100"
    },
    {
        "id":"1",
        "title":"Appare",
        "image":a,
        "price":"100"
    },
    {
        "id":"1",
        "title":"Appare",
        "image":c1,
        "price":"100"
    },
    {
        "id":"1",
        "title":"Appare",
        "image":c2,
        "price":"100"
    },

];
export const toolshomeapi =[
    {
        "id":"1",
        "title":"tools&home",
        "price":"100",
        "issale":"",
        "image":c1,
    },
    {
        "id":"1",
        "title":"tools&home",
        "price":"100",
        "issale":"",
        "image":c2,
    },
    {
        "id":"1",
        "title":"tools&home",
        "price":"100",
        "issale":"",
        "image":c3,
    },
    {
        "id":"1",
        "title":"tools&home",
        "price":"100",
        "issale":"",
        "image":c4,
    },
    {
        "id":"1",
        "title":"tools&home",
        "price":"100",
        "issale":"",
        "image":c3,
    },
    {
        "id":"1",
        "title":"tools&home",
        "price":"100",
        "issale":"",
        "image":c2,
    },
    {
        "id":"1",
        "title":"tools&home",
        "price":"100",
        "issale":"",
        "image":c1,
    },
];