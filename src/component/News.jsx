import React from 'react'
import logo from '../image/News_hero.png'
import lopa from '../image/lopa.png'
import '../styles/news.css'

function News() {
  return (
    <div className='news'>
      <img src={logo} alt="" />
      <h3>Lorem Ipsum is simply dummy text of the printing and.</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
     
     <div className="btn_input">
       <button><img src={lopa} alt="" /></button>
        <input type="text"  placeholder='Search' />
       </div>

     
    </div>
  )
}

export default News
