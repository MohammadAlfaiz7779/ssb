import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa"

const Qtytoggle = ({ amount, setdecrease, setincrease, v}) => {
    return (
        <div style={{display:'flex'}}>
            <button style={{background:'transparent',border:'none'}} onClick={()=>setdecrease(v.id)}>
                <FaMinus />
            </button>
            <div style={{margin:'0px 10px'}}>{amount}</div>
            <button style={{background:'transparent',border:'none'}} onClick={()=>setincrease(v.id)}>
                <FaPlus />
            </button>
        </div>
    )
}

export default Qtytoggle