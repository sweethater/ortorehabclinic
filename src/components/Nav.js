import React from 'react';
// import fyzioterapia from '../assets/fyzioterapia.jpg';
// import patientInfo from '../assets/patientInfo2.jpg';

import './Nav.css';

export const NavItem = ({imgName, title}) => {
  return <div>
    {/* <img className="co-navigation__image" src={fyzioterapia}/> */}
    <span className="co-navigation__title">{title}</span>
  </div>;
} 