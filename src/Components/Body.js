import React from 'react';
import Banner from './Banner';
import BestDeals from './BestDeals';
import WeekProducts from './WeekProducts';
import NewsLetter from './NewsLetter';

function Body() {
  return (
    <div className='body'>
      <Banner />
      <BestDeals />
      <WeekProducts />
      <NewsLetter />
    </div>
  )
}

export default Body;