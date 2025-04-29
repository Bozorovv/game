import React from 'react'
import '../styles/footer.css'
import rasm from '../image/footer_logo.svg'
import icon from '../image/icons.png'
import icon1 from '../image/icons1.png'
import icon2 from '../image/icons2.png'
import icon3 from '../image/icons3.png'
function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
         
            <div className="footer_wrapper">
            <h5>Lorem Ipsum</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <div className="imput">
            <div className="imput_text">
              <h3>Stay in the loop</h3>
              <p>Subscribe to receive the latest news and updates about TDA.
We promise not to spam you! </p>
            </div>
            <div className="imputt">
              <input className='im' type="text" placeholder='Enter email address'/>
              <button className='bbtn'>Continue</button>


            </div>
          </div>
            </div>
            <div className="footer_content">
                <div className="content">
                  <img src={rasm} alt="" />
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                  <h6>@Lorem</h6>
                  </div>
                  <div className="content2">
                    <h5>About us</h5>
                   <ul>
                    <li>Zeux</li>
                    <li>Portfolio</li>
                    <li>Careers</li>
                    <li>Contact us</li>
                   </ul>
                  </div>
                  <div className="content3">
                    <h5>Contact us</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <span>+908 89097 890</span>
                  </div>
                  <div className="content_img">
                    <div className="imgg">
                    <img src={icon} alt="" />
                    <img src={icon1} alt="" />
                    <img src={icon2} alt="" />
                    <img src={icon3} alt="" />

                    </div>
                  </div>
                  <br />
            </div>
            <h4 className='h4'> Copyright ® 2021 Lorem All rights Rcerved</h4>
        </div>
      
    </footer>
  )
}

export default Footer