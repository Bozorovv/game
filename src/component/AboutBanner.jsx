import React from 'react'
import '../styles/aboutbanner.css'
import ab__logo from '../image/ab__logo.png'

function AboutBanner() {
    return (
        <section className='about__banner'>
            <div className="container">
                <div className="ab__wrapper">
                    <div className="ab__img">
                        <img src={ab__logo} alt="" />
                    </div>
                    <div className="ab__content">
                        <h4>Lorem ipsum</h4>

                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutBanner
