import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <>
    <nav>
      <a href="/"><img src="images/vanvasiLogo.jpg" alt="logo"/>
    
        </a>
      <div>
        <ul id="navbar">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/product">Shop Now</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li> <a href='/'>
                <FontAwesomeIcon icon={faShoppingCart} /></a></li>
        </ul>
      </div>
    </nav>   
    </>
  );
}

export default NavBar;