import React from 'react'
import '../styles/contactend.css'

function ContactEnd() {
  return (
    <section className='contact__end'>
      <div className="container">
        <h3>Say hello</h3>
        <p>Lorem Ipsum is simply dummy text of the printing .</p>
        <div className="end__wrapper">
          <form >
            <div className="input__wrapper">
              <div className="input1">
                <label htmlFor="First Name">First name</label>
                <input type="text" />
              </div>
              <div className="input2">
                <label htmlFor="Last name">Last name</label>
                <input type="text" />
              </div>
            </div>
            <label htmlFor="">Email address</label>
            <input className='input3' type="text" />
            <label htmlFor="">Message</label>
            <input className='input4' type="text" />
            <div className="btnend"><button className='button'>Get in touch</button></div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactEnd