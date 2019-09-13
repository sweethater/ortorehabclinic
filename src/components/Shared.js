import React from "react";
import { NavLink } from 'react-router-dom';

import back from '../assets/back2.png';

import './Nav';

export const withBackButton = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const section = getSection(window.location.pathname)
      return (
        <React.Fragment>
          <NavLink className="navigation-item--back" to={backTo(window.location.pathname)}><img src={back} /></NavLink>
          <WrappedComponent {...this.props} section={section}/>
        </React.Fragment>
      );
    }
  };
}

const getSection = (pathname) => {
  return pathname.split("/").filter(Boolean)[0];
}

export const backTo = (pathname) => {
  const pathArray = pathname.split("/").filter(Boolean);
  pathArray.splice(-1,1);
  if (pathArray.length === 0) {
    return "/";
  }
  if (pathArray.length === 1) {
    return `/${pathArray[0]}`;
  }
  return `/${pathArray.join("/")}`;
}

export const allSectionItems = {
  orthopedic: {
    liecba_autolognymi_proteinmi: {
      key: "liecba_autolognymi_proteinmi",
      name: "Liečba autolognými proteínmi",
      component: "Orthopedic1",
    },
    detsky_ultrazvuk: {
      key: "detsky_ultrazvuk",
      name: "Detský ultrazvuk - USG",
      component: "Orthopedic1",
    },
    ortopedicke_vysetrenia: {
      key: "ortopedicke_vysetrenia",
      name: "Ortopedické vyšetrenia",
      component: "Orthopedic1",
    },
    plazmoterapia: {
      key: "plazmoterapia",
      name: "Plazmoterapia",
      component: "Orthopedic1",
    },
    razove_vlny: {
      key: "razove_vlny",
      name: "Rázové vlny",
      component: "Orthopedic1",
    },
    biostimulacny_laser: {
      key: "biostimulacny_laser",
      name: "Biostimulačný laser",
      component: "Orthopedic1",
    },
    kolagenove_injekcie: {
      key: "kolagenove_injekcie",
      name: "Kolagénove injekcie",
      component: "Orthopedic1",
    },
    ortopedicke_konzultacie: {
      key: "ortopedicke_konzultacie",
      name: "Konzultácie a posúdenia",
      component: "Orthopedic1",
    },
  },
}