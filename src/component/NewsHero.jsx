import React from 'react'
import '../styles/newsHero.css'
import rasm1 from '../image/news.png'
import rasm2 from '../image/news2.png'

import card from '../image/news_card.png'
import card2 from '../image/news_card2.png'
import card3 from '../image/news_card3.png'
import card4 from '../image/news_card4.png'
import card5 from '../image/news_card5.png'
import card6 from '../image/news_card6.png'
import card7 from '../image/news_card7.png'
function NewsHero() {
  return (
    <div className='newsHero'>
      <div className="container">
        <div className="news_wrapper">
          <div className="news_img">
            <div className="img1">
              <img src={rasm1} alt="" />
              <div className="nevw_btn">
                <button className='btn1'>John smash</button>
                <button className='btn2'>.5min</button>
              </div>
              <h3>Lorem Ipsum is simply dummy text dummy text </h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
              <h6>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. </h6>
             
            </div>
            <div className="img1">
              <img src={rasm2} alt="" />
              <div className="nevw_btn">
                <button className='btn1'>John smash</button>
                <button className='btn2'>.5min</button>
              </div>
              <h3>Lorem Ipsum is simply dummy text dummy text </h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>

             
            </div>

          </div>
          
          <div className="news_card">
            <div className="card_1">
              <img src={card} alt="" />
              <div className="cardcha1">
                <div className="cardcha2">
                  <button className='btnn1'>John smash</button>
                  <button>.5min</button>
                </div>
                <div className="news_p">
                <p>Lorem Ipsum is simply dummy text dummy text ? </p>
                </div>

              </div>

            </div>
            <div className="card_1">
              <img src={card2} alt="" />
              <div className="cardcha1">
                <div className="cardcha22">
                  <button className='haha' >John smash</button>
                  <button className='xaxa' >.5min</button>
                </div>
                <div className="news_p">
                <p>Lorem Ipsum is simply dummy text dummy text ? </p>
                </div>

              </div>

            </div>
            <div className="card_1">
              <img src={card3} alt="" />
              <div className="cardcha1">
                <div className="cardcha2">
                  <button className='btn11'>John smash</button>
                  <button>.5min</button>
                </div>
                <div className="news_p">
                <p>Lorem Ipsum is simply dummy text dummy text ? </p>
                </div>

              </div>

            </div>
            <div className="card_1">
              <img src={card4} alt="" />
              <div className="cardcha1">
                <div className="cardcha22">
                  <button className='haha'>John smash</button>
                  <button className='xaxa'>.5min</button>
                </div>
                <div className="news_p">
                <p>Lorem Ipsum is simply dummy text dummy text ? </p>
                </div>

              </div>

            </div>
            <div className="card_1">
              <img src={card5} alt="" />
              <div className="cardcha1">
                <div className="cardcha2">
                  <button className='btn11'>John smash</button>
                  <button>.5min</button>
                </div>
                <div className="news_p">
                <p>Lorem Ipsum is simply dummy text dummy text ? </p>
                </div>

              </div>

            </div>
            <div className="card_1">
              <img src={card6} alt="" />
              <div className="cardcha1">
                <div className="cardcha22">
                  <button className='haha'>John smash</button>
                  <button className='xaxa'>.5min</button>
                </div>
                <div className="news_p">
                <p>Lorem Ipsum is simply dummy text dummy text ? </p>
                </div>

              </div>

            </div>
            <div className="card_1">
              <img src={card7} alt="" />
              <div className="cardcha1">
                <div className="cardcha2">
                  <button className='btn11' >John smash</button>
                  <button>.5min</button>
                </div>
                <div className="news_p">
                <p>Lorem Ipsum is simply dummy text dummy text ? </p>
                </div>

              </div>

            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default NewsHero
