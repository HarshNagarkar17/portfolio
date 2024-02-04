import React, { useState } from 'react';
export const Nav = () => {
  const [selectedMenu, setSelectedMenu] = useState('Home');

  const handleMenuClick = (menu,e) => {
    e.preventDefault();
    setSelectedMenu(menu);
  };

  const getMenuStyle = (menu) => {
    return menu === selectedMenu ? '' : 'font-menu';
  };
  

  return (
    <div className='text-center bg-red-500'>
      <ul className='flex items-center justify-center nunito text-white pt-7'>
        <li className={`m-4 ${getMenuStyle('Home')} font-bold`} onClick={(e) => handleMenuClick('Home',e)}>
          <a href="">Home</a>
        </li>
        <li className={`m-4 ${getMenuStyle('Portfolio')} font-bold`} onClick={(e) => handleMenuClick('Portfolio',e)}>
          <a href="">Portfolio</a>
        </li>
        <li className={`m-4 ${getMenuStyle('About')} font-bold`} onClick={(e) => handleMenuClick('About',e)}>
          <a href="">About</a>
        </li>
        <li className={`m-4 ${getMenuStyle('Contact')} font-bold`} onClick={(e) => handleMenuClick('Contact',e)}>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};
