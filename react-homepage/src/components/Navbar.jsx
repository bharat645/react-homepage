import React from 'react'
import logo from '../assets/react.svg'; 
import Services from './Service';
function Navbar() {
    

  return (
    <div>
       <nav className="navbar">
        <img src={logo} alt="logo" />

      <ul className="nav-links">
        <li><a href='#'>Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button className="nav-btn">Login</button>
    </nav>
    </div>
  )
}
export default Navbar;