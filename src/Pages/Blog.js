import React from 'react'
import "./Blog.css"
import b1 from "../images/blogbox/b1.jpg";
import b2 from "../images/blogbox/b2.jpg";
import b3 from "../images/blogbox/b3.jpg";
import Blogbar from '../Component/Blogbar';

const Blog = () => {
  return (
    <div>
      <Blogbar />
      <div className='main-blog'>
        <div className='blog-section'>
          <div className='blogcard'>
            <img src={b1} />
            <div className='blogdesc'>
              <p>Toast</p>
              <a className='btn'>Read More</a>
            </div>
          </div>
          <div className='blogcard'>
            <img src={b2} />
            <div className='blogdesc'>
              <p>Namkeen</p>
              <a className='btn'>Read More</a>
            </div>
          </div>
          <div className='blogcard landscape'>
            <img src={b3} />
            <div className='blogdesc'>
              <p>Namkeen</p>
              <a className='btn'>Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog