import React from 'react'
import servicelogo from '../image/service_logo.png'
import uuser from '../image/uuser.svg'
import location from '../image/location.png'
import server from '../image/Server.png'
import chziq from '../image/chiziq.png'
import '../styles/service_hero.css'
function ServiceHero() {
    return (
        <div className='service'>
            <div className="container">
                <div className="s__wrapper">
                    <div className="service__text">
                        <img src={servicelogo} alt="" />
                        <h3>Lorem Ipsum is simply dummy text of the printing and.</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <div className="service__content">
                       
                        <div className="service__card">
                            <img src={uuser} alt="" />
                            <div className="h3">
                            <h3>90+</h3>
                            <h4>Clients</h4>
                            </div>
                            <img className='iimg' src={chziq} alt="" />
                        </div>
                       
                        <div className="service__card">
                            <img src={location} alt="" />
                            <div className="h3">
                            <h3>30+</h3>
                            <h4>Countries</h4>
                            </div>
                            <img className='iimg' src={chziq} alt="" />
                        </div>
                       
                        <div className="service__card">
                            <img src={server} alt="" />
                            <div className="h3">
                            <h3>50+</h3>
                            <h4>Projects</h4>
                            </div>
                        </div>
                       

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceHero
