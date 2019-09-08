import React from 'react';
import logoWhite from '../assets/logo-white.png';
import arrow from '../assets/arrow.png';

// import { Img } from './Utils'

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

export const ComponentMenuItem = ({imageName, section, title}) => {
  const sectionClass = `co-component-menu-item__title-wrapper-${section}`
  return <div className={`co-component-menu-item__wrapper  ${section}-${imageName}`}>
    <div className={'co-component-menu-item__title-wrapper ' + sectionClass} ></div>
    <span className="co-component-menu-item__title">{title}</span>
    <img className="co-component-menu-item__arrow-image" src={arrow}/>
  </div>;
}
