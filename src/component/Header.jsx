import React, { useRef } from 'react'
import logo from '../image/logo.svg'
import '../styles/header.css'
import { NavLink } from 'react-router-dom'
function Header() {

  let modal = useRef()

  function openModal(){
   modal.current.classList.add("show")
  }
  function closeModal(){
   modal.current.classList.remove("show")
  }

  return (
    <header className='header'>
      <div className="modal" ref={modal}>
        <div className="close__btn" onClick={closeModal}>
          <img width={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUzJyi0T5vjSSSVPOgjQ_gH-ueHI64aoYmIQ&s" alt="" />
        </div>
        <ul className='ull'>
        <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li><NavLink to="/about">About us</NavLink></li>
          <li><NavLink to="/service">Portfolio</NavLink></li>
          <li><NavLink to="/news">News</NavLink></li>





          <div className="btn">
            <NavLink to="/contact">Contact us</NavLink>
          </div>
        </ul>
      </div>
      <div className="header_wrapper">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="ul">

          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li><NavLink to="/about">About us</NavLink></li>
          <li><NavLink to="/service">Portfolio</NavLink></li>
          <li><NavLink to="/news">News</NavLink></li>





          <div className="btn" >
            <NavLink to="/contact"><button>Contact us</button></NavLink>
          </div>
          <div className="burger" onClick={openModal}>
            <img width={50} src="https://cdn-icons-png.flaticon.com/512/10613/10613684.png" alt="" />
          </div>
        </ul>


      </div>



    </header>
  )
}

export default Header
