import React from 'react'
import logoo from '../image/logoo.svg'
import about from '../image/about.svg'
import chap from '../image/chap.svg'
import logo from '../image/rasm.png'
import ong from '../image/ong.svg'

import '../styles/about.css'
function About() {
  return (
    <div className='abaut'>
        <div className="container">
            <div className="abaut_text">
                <div className="text">
                     <img src={logoo} alt="" />
                   <h3>Lorem Ipsum is simply dummy text of the printing and.</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <button>Get in touch <img src={about} alt="" /></button>
                </div>
                <div className="abaut_img">
                    <div className="card">

                    <img src={logo} alt="" />
                    </div>
                <div className="img_text">
                    <div className="text3">
                    <div className="img">
                        <img src={chap} alt="" />
                    </div>
                    <div className="text_img">
                        <h5>1 of 2</h5>
                    </div>
                    <div className="img2">
                        <img src={ong} alt="" />
                    </div>
                    </div>
                    
                </div>
            </div>
            </div>
          
        </div>
      
    </div>
  )
}

export default About