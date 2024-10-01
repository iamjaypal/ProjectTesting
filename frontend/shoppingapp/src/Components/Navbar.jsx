import React from 'react'
import '../Styles/navbar.css'
import { FcBriefcase } from "react-icons/fc";
function Navbar() {
  return (
   <>
    <div className="navbar">
        <div className="nav-left">
            <a href="/">
               JKShop
               
            </a>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/004/829/110/small/the-sultan-s-or-guru-crown-logo-design-a-minimalist-and-luxurious-royal-symbol-icon-in-gold-free-vector.jpg" alt="Logo" />
        </div>
        <div className="nav-center">
              <ul className='nav-links'>
                <li><a href="/">Home</a></li>
                <li><a href="/mens">Mens</a></li>
                <li><a href="/womens">Womens</a></li>
                <li><a href="/kids">Kids</a></li>
              </ul>
        </div>
        <div className="nav-right">
            <a href="/cart"><FcBriefcase/></a>

        </div>
    </div>
   </>
  )
}

export default Navbar
