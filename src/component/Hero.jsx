import React from 'react'
import joystic from '../image/joystic2.png'
import logo1 from '../image/logo1.svg'
import logo2 from '../image/logo2.svg'
import logo3 from '../image/logo3.svg'
import '../styles/hero.css'
function Hero() {
  return (
    <section className='hero'>
      <div className="container">
        <div className="hero__wrapper">
            <div className="hero__text">
                <h3>3D game Dev </h3>
                <h1>Work that we produce for our clients</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                <button>Get more details</button>
            </div>
            <div className="hero__img">
                <img className='joyystik'  width={403}  src={joystic} alt="" />
                
            <img className='img1' src={logo1} alt="" />
            
            
            <img className='img2' src={logo2} alt="" />
            
            
            <img className='img3' src={logo3} alt="" />
            
            </div>
           
            
        </div>
      </div>
    </section>
  )
}

export default Hero
