import React from 'react';
import './style.css';
import DarkMode from '../../DarkMode/DarkMode'
const Header = () => {
  return (
    <div className="header-wrap">
      <div className="container">
        <div className="header-block">
          <div className='header-block-wrap'>
          <span className="header-block-logo"></span>
          <p className="header-block-text">Портал получения пособий</p>
          </div>
          <div className='header-theme'>
      <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
