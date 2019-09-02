import React from 'react';
import image from '../assets/fyzioterapia.jpg';

import './Nav.css';

export const NavItem = ({imgName, title}) => {
  return <div>
    <img className="co-navigation__image" src={image}/>
    <span className="co-navigation__title">{title}</span>
  </div>;
} 