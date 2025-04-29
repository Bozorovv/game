import React from 'react'
import logo from '../image/can_img.png'
import logo1 from '../image/insta_can.png'
import logo2 from '../image/qush.png'
import logo3 from '../image/in.png'
import tel from '../image/phone.png'
import chizq from '../image/chiziq1.png'
import joy from '../image/Vector_con.png'
import '../styles/contactHero.css'
function Contact_hero() {
  return (
    <section className='contact_hero'>
      <div className="container">
        <div className="contact__wrapper">
            <div className="contact__card">
                <h4>Follow us</h4>
                <div className="card__img">
                    <img src={logo} alt="" />
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />

                </div>
                <img className='immg' src={chizq} alt="" />
               
            </div>
            <div className="card__tel">
                  <img src={tel} alt="" />
                  <h5>+94 4444 5555 6</h5>
                  <img className='immgg' src={chizq} alt="" />
            </div>
            <div className="card_location">
                <img src={joy} alt="" />
                <p>but also the leap into electronic 
typesetting</p>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Contact_hero
