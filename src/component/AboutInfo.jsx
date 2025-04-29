import React from 'react'
import odamcha from '../image/odamcha.png'
import odamcha2 from '../image/odamcha2.png'
import odamcha3 from '../image/odamcha3.png'
import odamcha4 from '../image/odamcha4.png'
import '../styles/aboutinfo.css'
function AboutInfo() {
  return (
    <section className='a__info'>
      <div className="container">
        <h2>Our Team</h2>
        <div className="ai__wrapper">
            <div className="ai__card">
                <img src={odamcha} alt="" />
                <h3>John peter</h3>
                <h4>COO</h4>
            </div>
            <div className="ai__card">
                <img src={odamcha2} alt="" />
                <h3>John peter</h3>
                <h4>COO</h4>
            </div>
            <div className="ai__card">
                <img src={odamcha3} alt="" />
                <h3>John peter</h3>
                <h4>COO</h4>
            </div>
            <div className="ai__card">
                <img src={odamcha4} alt="" />
                <h3>John peter</h3>
                <h4>COO</h4>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutInfo
