import React, { useState } from 'react'
import "./Carousel.css"
import { GrPrevious, GrNext } from 'react-icons/gr'
import { carouselapi } from "../Service/apiservice";

const Carousel = () => {

    const [tran, settran] = useState(0)


    const prev = () => {
        if (tran == 0) {
            settran(0)
        } else {
            settran(tran + 1);
        }
    }
    const next = () => {
        console.log(carouselapi.length);
        console.log(tran);
        if (tran == -carouselapi.length + 1) {
            settran(0)
        } else {
            settran(tran - 1);
        }
    }

    return (
        <div className='carousel'>
            {
                carouselapi.map(v => {
                    return (
                        <div style={{ transition: "0.5s ease-in-out", transform: `translateX(${tran * 100}%)` }} className="c-img">
                            <img
                                src={v.src}
                                srcSet={`${v.src} 300w, ${v.src} 768w, ${v.src} 1280w`}
                                sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
                            />
                        </div>
                    )
                })
            }
            <div onClick={prev} className='prev'><GrPrevious size={48} /></div>
            <div onClick={next} className='next'><GrNext size={48} /></div>
        </div>
    )
}

export default Carousel