import React from 'react'
import "./Blogbar.css"
import { GrPrevious, GrNext } from 'react-icons/gr'
const Blogbar = () => {
  return (
    <div className='Blogbar'>
        <div className="bar">
            <ul>
                <li>
                    <a href="#">EATERY</a>
                    
                </li>
                <li>
                    <a href="#">APPAREL</a>
                </li>
                <li>
                    <a href="#">ACCESSORIES</a>
                </li>
                <li>
                    <a href="#">TOOLS & HOME</a>
                </li>
                <li>
                    <a href="#">GADGETS</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Blogbar