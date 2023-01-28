import React from 'react'
import "./Blogdetail.css"
import b1 from "../images/blogbox/b1.jpg";
import b2 from "../images/blogbox/b2.jpg";
const Blogdetail = () => {
  return (

    <div className='blog-content'>
      <div className="content">
        <div className="date">
          <p>August 21, 1998</p>
        </div>
        <div className="blog-title">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        {
          <div className="title-img">
            <img src={b1} alt="" />
          </div>
        }
        <div className="blog-description">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus voluptas assumenda ad, amet blanditiis rerum cupiditate repellendus est obcaecati dicta quam praesentium voluptatibus facere aperiam qui sed dolore, incidunt fugit eligendi iusto? Reiciendis ad rerum totam facere dicta numquam, exercitationem laborum quis sequi porro, neque doloribus eveniet tempora nam vel eaque. Est debitis voluptas cum, adipisci aliquam alias sed rem, molestias eveniet quidem fugit distinctio temporibus maiores sequi! Laboriosam iusto minus aliquam eos rerum dolore exercitationem quisquam, officiis esse iure ducimus libero voluptate itaque nulla veritatis consectetur officia sit, est praesentium beatae placeat quod error assumenda doloremque. Adipisci, enim delectus.</p>
        </div>
      </div>

      <div className='Related-blogs'>
        <div className="heading">
          <p>Related Blogs</p>
        </div>
        <div className="blogcard">
          <div className='blog-card'>
            <img src={b1} />
            <div className='blogdesc'>
              <p>Toast</p>
              <a className='btn'>Read More</a>
            </div>
          </div>
          <div className='blog-card'>
            <img src={b1} />
            <div className='blogdesc'>
              <p>Toast</p>
              <a className='btn'>Read More</a>
            </div>
          </div>
          <div className='blog-card'>
            <img src={b1} />
            <div className='blogdesc'>
              <p>Toast</p>
              <a className='btn'>Read More</a>
            </div>
          </div>
          <div className='blog-card'>
            <img src={b1} />
            <div className='blogdesc'>
              <p>Toast</p>
              <a className='btn'>Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogdetail