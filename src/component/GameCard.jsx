import React from 'react'
import olov from '../image/olov.svg'
import '../styles/game.css'
import logoo from '../image/logoo.png'
import logoo2 from '../image/logoo2.png'
import logoo3 from '../image/logoo3.png'
import logoo4 from '../image/logoo4.png'

function GameCard() {
  return (
    <section className='game'>
      <div className="container">
        <div className="game__wrapper">
            <div className="game__text">
                <h1>Currently Trending Games </h1>   
                      
            </div>
            <div className="game__btn">
                <button>SEE ALL</button>
            </div>
        </div>
        <div className="game__wrapper2">
            <div className="game__cardd">
            <div className="game__card">
                <img className='logoo' src={logoo3} alt="" />
                <h2><img c src={olov} alt="" /> 40 Followers</h2>
            </div>
            <div className="game__card">
                <img className='logoo' src={logoo2} alt="" />
                <h2><img  src={olov} alt="" /> 40 Followers</h2>
            </div>
            <div className="game__card">
                <img className='logoo' src={logoo} alt="" />
                <h2><img  src={olov} alt="" /> 40 Followers</h2>
            </div>
            <div className="game__card">
                <img className='logoo' src={logoo4} alt="" />
                <h2><img src={olov} alt="" /> 40 Followers</h2>
            </div>

            </div>
           
        </div>
      </div>
    </section>
  )
}

export default GameCard
