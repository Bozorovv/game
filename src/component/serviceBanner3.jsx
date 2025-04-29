import React from 'react'
import sb__img3 from '../image/sb__img3.png'
import '../styles/service__banner.css'
function ServiceBanne3() {
  return (
    <section className='service__banner'>
      <div className="container">
        <div className="sb__wrapper">
            <div className="sb__text">
                <h2>Lorem Ipsum is simply dummy 
                text dummy text </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h6>
                <button>Read more</button>
            </div>
            <div className="sb__img">
                <img src={sb__img3} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceBanne3
