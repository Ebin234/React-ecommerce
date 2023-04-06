import React from 'react';
import { GrFormDown } from "react-icons/gr";

function menu() {
  return (
    <div className='menu'>
      <div className='left'>
        <p>All Categories</p>
        <GrFormDown />
      </div>
      <div className='list'>
        <ul>
          <li>Books</li>
          <li>Electronics</li>
          <li>real estate</li>
          <li>Cars-bikes</li>
          <li> Dorm-furniture</li>
          <li> Men</li>
          <li>Women</li>
          <li> Music</li>
          <li>hobbies Games</li>
          <li>toys</li>
          <li>Kids</li>
        </ul>
      </div>
    </div>
  )
}

export default menu;
