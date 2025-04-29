import React from 'react'
import sm__img from '../image/spiderr.png'
import galochka from '../image/galochka.svg'
import '../styles/sm_main.css'


function ServiceMain() {
    return (
        <section className='service__main'>
            <div className="container">
                <div className="sm__wrapper">
                    <div className="sm__img">
                        <img src={sm__img} alt="" />
                    </div>
                    <div className="sm__text">
                        <h3>Lorem Ipsum is simply dummy text.</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</p>
                        <div className="sm__textt">
                        <img src={galochka} alt="" />
                            <h6>Lorem Ipsum is simply</h6>
                        </div>
                        <div className="sm__textt">
                        <img src={galochka} alt="" />
                            <h6>Lorem Ipsum is simply</h6>
                        </div>
                        <div className="sm__textt">
                        <img src={galochka} alt="" />
                            <h6>Lorem Ipsum is simply</h6>
                        </div>
                        <div className="sm__textt">
                        <img src={galochka} alt="" />
                            <h6>Lorem Ipsum is simply</h6>
                        </div>
                    


                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceMain
