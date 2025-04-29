import React from 'react'
import '../styles/contact.css'
import logo from '../image/content_logo.png'
import xarita from '../image/xarita.png'
function Contact() {
  return (
    <div className='contact'>
        <div className="container">
            <img src={logo} alt="" />
            <h3>Lorem Ipsum is simply dummy text of the printing and.</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <div className="wrapper">
                <img src={xarita} alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Contact
