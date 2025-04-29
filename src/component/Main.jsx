import React from 'react'
import main1 from '../image/main1.png'
import main2 from '../image/main2.png'
import main3 from '../image/main3.png'
import main4 from '../image/main4.png'
import main5 from '../image/main5.png'
import main6 from '../image/main6.png'
import '../styles/main.css'


function Main() {
  return (
    <section className='main'>
      <div className="container">
        <div className="main__wrapper">
            
                <h1>Our Recent Projects</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            
            <div className="main__img">
                <div className="main__card"><img src={main1} alt="" /></div>
                <div className="main__card"><img src={main2} alt="" /></div>
                <div className="main__card"><img src={main3} alt="" /></div>
                
            </div>
            <div className="main__img2">
            <div className="main__cardd"> <img src={main4} alt="" /></div>
                <div className="main__card"><img src={main5} alt="" /></div>
                <div className="main__card"><img src={main6} alt="" /></div>  
            </div>
            <div className="btnn"><button >SEE ALL</button></div>
            
        </div>
      </div>
    </section>
  )
}

export default Main
