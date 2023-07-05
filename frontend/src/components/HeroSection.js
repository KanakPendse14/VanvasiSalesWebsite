import React from 'react'
import CarouselSec from './CarouselSec'
// import styled from "styled-components"

import Categorycarousel from './Category_Carousel'
const HeroSection = () => {
  return (
   <div>
     <div className='container-home'>
      
      <div className='left'>
        <CarouselSec/>
        
      </div>
      <div className='right'>
        <h1 className='hero-section-h1'>VANVASI TRIBAL HUB</h1>
        <div className="button-div"><a href="/product"><button className='hero-section-button'>Shop Now</button></a></div>

      </div>
    
  </div>
  <div className='container-home'>
    
     
      <div className='right'>
        <p className="hero-section-p">
I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
<div className="button-div"><a href="/about"><button className='hero-section-button'>Read More</button></a></div>
      </div>
      <div className='left'>
       
       <div className='sec2-img'>
          <img src='images/img10.webp' alt="sec2img" className='sec2-img1'/>
          <img src='images/img4.jpg' alt="sec2img" className='sec2-img1' />
         </div>
          <div className='sec2-img'>
          <img src='images/img6.jpg' alt="sec2img" className='sec2-img1'/>
          <img src='images/img1.jpg' alt="sec2img" className='sec2-img1' />
          </div>
           
      
      </div>
    
  </div>
  <div className='container-home'>
    <div className='car'><Categorycarousel/></div>
      
    
  </div>
   </div>
  );
 
};


export default HeroSection
