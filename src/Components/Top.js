import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillCaretDown } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

function Top() {
  return (
    <div className='top'>
      <div className='inner'>
        <BsFillTelephoneFill size={14} />
        <p>+221 33 66 22</p>
        <MdEmail size={22} />
        <p>support@elextra.io</p>
      </div>
      <div className='inner'>
        <IoLocationSharp size={18} /><p>Locations</p>
        <div className='vline'></div>
        <div className='right'>
          <p>$ Dollar (US) </p><AiFillCaretDown size={14} />
        </div>
        <div className='right'>
          <p>EN </p><AiFillCaretDown size={14} />
        </div>
      </div>
    </div>
  )
}


export default Top;
