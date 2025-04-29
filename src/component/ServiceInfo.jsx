import React from 'react'
import card__logo from '../image/cardd__logo.png'
import card__logo2 from '../image/card__logo2.svg'
import card__logo3 from '../image/card__logo3.png'
import yulduzcha from '../image/yulduzcha.svg'
import nuqta from '../image/nuqta.svg'
import left from '../image/left.svg'
import right from '../image/right2.png'

import '../styles/serice__info.css'

function ServiceInfo() {
  return (
    <section className='service__info'>
      <div className="container">
        <div className="si__wrapper">
            <div className="si__text">
                <h2>Trusted by Thousands of Happy Customer</h2>
                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy . </h6>
            </div>
            <div className="si__content">
                <div className="si__card">
                    <div className="card__logo">
                        <div className="card__info">
                        <img src={card__logo} alt="" />
                        <div className="card__teext">
                        <h5>Viezh Robert</h5>
                        <h6>Warsaw, Poland</h6>
                        </div>
                       
                        </div>
                        
                        <div className="card__img">
                            <h6>4.5</h6>
                            <img src={yulduzcha} alt="" />
                        </div>
                        <div className="p">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                      
                    </div>
                </div>
                <div className="si__card2">
                    <div className="card__logo">
                        <div className="card__info">
                        <img src={card__logo2} alt="" />
                        <div className="card__teext">
                        <h5>Yessica Christy</h5>
                        <h6>Shanxi, China</h6>
                        </div>
                       
                        </div>
                        
                        <div className="card__img">
                            <h6>4.5</h6>
                            <img src={yulduzcha} alt="" />
                        </div>
                        <div className="p">
                        <p>Lorem Ipsum is simply dummy text of the printing and </p>
                        </div>
                      
                    </div>
                </div>
                <div className="si__card2">
                    <div className="card__logo">
                        <div className="card__info">
                        <img src={card__logo3} alt="" />
                        <div className="card__teext">
                        <h5>VKim Young Jou</h5>
                        <h6>Seoul, South Korea</h6>
                        </div>
                       
                        </div>
                        
                        <div className="card__img">
                            <h6>4.5</h6>
                            <img src={yulduzcha} alt="" />
                        </div>
                        <div className="p">
                        <p>LLorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                      
                    </div>
                </div>
            </div>
            <div className="si__logo">
                <img src={nuqta} alt="" />
                <div className="si__logo2">
                <img src={left} alt="" />
                <img src={right} alt="" />
                </div>
                
            </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceInfo
