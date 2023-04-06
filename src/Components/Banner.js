import React from 'react';
import banner1 from "../Assets/banner1.png";

function Banner() {
  return (
    <div className='bannerContainer'>
      <div className='banner'>
        <img id='slide1' src={banner1} alt="banner1" />
      </div>
      <div className='banner'>
        <img id='slide2' src={banner1} alt="banner1" />
        <p>From students to senior citizens this web portal of <strong> "Products and Classifieds”</strong> provides it all</p>
      </div>
      <div className='banner'>
        <img id='slide3' src={banner1} alt="banner1" />
      </div>
    </div>
  )
}

export default Banner;
