import React from 'react'
import '../styles/banner.css'
import spider from '../image/spider.png'
import img from '../image/img.svg'

function Banner() {
  return (
    <section className='banner'>
      <div className="container">
        <div className="banner__wrapper">
            <h1 >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
            <div className="banner__content">
                <div className="banner__text">
                    <h2 c>Lorem Ipsum</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <div className="banner__img">
                    <img className='spider' src={spider} alt="" />
                    <div className="iimg"> <img className='img' src={img} alt=""/></div> 
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
