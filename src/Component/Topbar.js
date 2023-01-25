import React from 'react'
import "./Topbar.css"

import {category} from "../Service/apiservice";
const Topbar = () => {
    return (

        <div className='topbar'>
            <div className="top-bar">
                <ul>
                    {
                        category.map(v=>{
                            return(
                                <li>
                                    <img src={v.img} alt="" />
                                <a href="#">{v.Name}</a>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Topbar