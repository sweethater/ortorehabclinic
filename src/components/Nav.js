import React from 'react';
import logoWhite from '../assets/logo-white.png';
import arrow from '../assets/arrow.png';

import './Nav.css';

export const NavHeader = () => {
  return <div className="co-navigation-header__wrapper">
    <img className="co-navigation-header__image" src={logoWhite}/>
  </div>;
} 

export const NavItem = ({imgName, title, index}) => {
  return <div className={'co-navigation-item__wrapper co-navigation-item__bg-nav-' + index}>
    <span className="co-navigation-item__title">{title}</span>
    <img className="co-navigation-item__image" src={arrow}/>
  </div>;
} 