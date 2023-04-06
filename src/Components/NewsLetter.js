import React from 'react';
import vector from "../Assets/Vector.png";

function NewsLetter() {
  return (
    <div className='newsletter'>
      <div className='newsletter-img'>
        <img src={vector} alt="vector" />
        <div className='sign'>
          <h2>Sign Up for Newsletter</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className='newsletter-input'>
        <input type="text" placeholder='Enter your email here' />
        <button>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default NewsLetter;
