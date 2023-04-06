import React from 'react';
import Top from "./Top";
import Mid from "./Mid";
import Menu from "./Menu";

function Header() {
  return (
    <div className='header'>
      <Top />
      <Mid />
      <Menu />
    </div>
  )
}

export default Header;
