import React from 'react';
// import fyzioterapia from '../assets/nav-fyzio.png';
// import patientInfo from '../assets/patientInfo2.jpg';

import './Nav.css';

export const NavItem = ({imgName, title}) => {
  return <div className="co-navigation__wrapper">
    {/* <img className="co-navigation__image" src={fyzioterapia}/> */}
    {/* <div className="co-navigation__image" ></div> */}
    <span className="co-navigation__title">{title}</span>
  </div>;
} 