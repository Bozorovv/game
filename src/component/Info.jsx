import React from 'react'
import mini_img from '../image/mini_img.png'
import strelka from '../image/strelka.svg'
import '../styles/info.css' 
function Info() {
  return (
    <section className='info'>
      <div className="container">
        <div className="info__wrapper">
            <div className="info__content">
                <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
            </div>
            <div className="info__img">
                <div className="info__card">
                <img src={mini_img} alt="" />
                <h3>Mobile Game Development</h3>
                <img src={strelka} alt="" />
                </div>
                <div className="info__card">
                <img src={mini_img} alt="" />
                <h3>PC Game Development</h3>
                <img src={strelka} alt="" />
                </div>
                <div className="info__card">
                <img src={mini_img} alt="" />
                <h3>PS4 Game Development</h3>
                <img src={strelka} alt="" />
                </div>
                <div className="info__card">
                <img src={mini_img} alt="" />
                <h3>AR/VR Solutions</h3>
                <img src={strelka} alt="" />
                </div>      
            </div>
            <div className="info__img2">
              <div className="info__card">
              <img src={mini_img} alt="" />
                <h3>AR/ VR design</h3>
                <img src={strelka} alt="" />
              </div>
              <div className="info__card">
              <img src={mini_img} alt="" />
                <h3>3D Modelings</h3>
                <img src={strelka} alt="" />
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Info
