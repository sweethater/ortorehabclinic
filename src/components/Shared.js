import React from "react";
import { NavLink } from 'react-router-dom';

import { Orthopedic1, Orthopedic2, Orthopedic3, Orthopedic4, Orthopedic5, Orthopedic6, Orthopedic7, Orthopedic8 } from "./OrtopedicItems"
import { Fyzio1, Fyzio2, Fyzio3, Fyzio4, Fyzio5, Fyzio6, Fyzio7, Fyzio8, Fyzio9, Fyzio10 } from "./FyzioItems"
import { Denzito1 } from "./DenzitoItems"

import back from '../assets/back2.png';

import './Nav';

const loadVideoAndPoster = (source, item) => {
  let video;
  let poster;
  switch (source) {
    case '../assets/videos/laser_12-1.mp4':
      video = require ('../assets/videos/laser_12-1.mp4');
      poster = require ('../assets/videos/posters/laser_12-1.jpg');
      break;
    case '../assets/videos/laser_12-2.mp4':
      video = require ('../assets/videos/laser_12-2.mp4');
      poster = require ('../assets/videos/posters/laser_12-2.jpg');
      break;
    case '../assets/videos/plazmoterapia-1.mp4':
      video = require ('../assets/videos/plazmoterapia-1.mp4');
      poster = require ('../assets/videos/posters/plazmoterapia-1.jpg');
      break;
    case '../assets/videos/plazmoterapia-2.mp4':
      video = require ('../assets/videos/plazmoterapia-2.mp4');
      poster = require ('../assets/videos/posters/plazmoterapia-2.jpg');
      break;
    case '../assets/videos/tr_therapy-1.mp4':
      video = require ('../assets/videos/tr_therapy-1.mp4');
      poster = require ('../assets/videos/posters/tr_therapy-1.jpg');
      break;
    case '../assets/videos/tr_therapy-2.mp4':
      video = require ('../assets/videos/tr_therapy-2.mp4');
      poster = require ('../assets/videos/posters/tr_therapy-2.jpg');
      break;
    case '../assets/videos/vykonny_indukcny_system-1.mp4':
      video = require ('../assets/videos/vykonny_indukcny_system-1.mp4');
      poster = require ('../assets/videos/posters/vykonny_indukcny_system-1.jpg');
      break;
    case '../assets/videos/vykonny_indukcny_system-2.mp4':
      video = require ('../assets/videos/vykonny_indukcny_system-2.mp4');
      poster = require ('../assets/videos/posters/vykonny_indukcny_system-2.jpg');
      break;
    case '../assets/videos/vykonny_indukcny_system-3.mp4':
      video = require ('../assets/videos/vykonny_indukcny_system-3.mp4');
      poster = require ('../assets/videos/posters/vykonny_indukcny_system-3.jpg');
      break;
    case '../assets/videos/vykonny_indukcny_system-4.mp4':
      video = require ('../assets/videos/vykonny_indukcny_system-4.mp4');
      poster = require ('../assets/videos/posters/vykonny_indukcny_system-4.jpg');
      break;
    default:
      video = require ('../assets/videos/laser_12-1.mp4');
      poster = require ('../assets/videos/posters/laser_12-1.jpg');
  }
  return {video, poster};
}

export const withBackButton = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const section = this.props.location.pathname.split("/").filter(Boolean)[0];
      const item = this.props.location.pathname.split("/").filter(Boolean)[1];
      return (
        <React.Fragment>
          <NavLink className="navigation-item--back" to={backTo(window.location.pathname)}><img src={back} /></NavLink>
          <WrappedComponent {...this.props} section={section} item={item} />
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
      component: Orthopedic1,
    },
    detsky_ultrazvuk: {
      key: "detsky_ultrazvuk",
      name: "Detský ultrazvuk - USG",
      component: Orthopedic2,
    },
    ortopedicke_vysetrenia: {
      key: "ortopedicke_vysetrenia",
      name: "Ortopedické vyšetrenia",
      component: Orthopedic3,
    },
    plazmoterapia: {
      key: "plazmoterapia",
      name: "Plazmoterapia",
      component: Orthopedic4,
    },
    razove_vlny: {
      key: "razove_vlny",
      name: "Rázové vlny",
      component: Orthopedic5,
    },
    biostimulacny_laser: {
      key: "biostimulacny_laser",
      name: "Biostimulačný laser",
      component: Orthopedic6,
    },
    kolagenove_injekcie: {
      key: "kolagenove_injekcie",
      name: "Kolagénove injekcie",
      component: Orthopedic7,
    },
    ortopedicke_konzultacie: {
      key: "ortopedicke_konzultacie",
      name: "Konzultácie a posúdenia",
      component: Orthopedic8,
    },
  },
  fyzio: {
    vykonny_indukcny_system: {
      key: "vykonny_indukcny_system",
      name: "Výkonný indukčný systém",
      component: Fyzio1,
    },
    laser_12: {
      key: "laser_12",
      name: "Laserová terapia",
      component: Fyzio2,
    },
    tr_therapy: {
      key: "tr_therapy",
      name: "TR terapia",
      component: Fyzio3,
    },
    makke_techniky: {
      key: "makke_techniky",
      name: "Mäkké techniky",
      component: Fyzio4,
    },
    sm_system: {
      key: "sm_system",
      name: "SM systém",
      component: Fyzio5,
    },
    trx: {
      key: "trx",
      name: "TRX",
      component: Fyzio6,
    },
    kineziotaping: {
      key: "kineziotaping",
      name: "Kinesiotaping",
      component: Fyzio7,
    },
    individualne_cvicenia: {
      key: "individualne_cvicenia",
      name: "Individuálne cvičenia",
      component: Fyzio8,
    },
    skupinove_cvicenia: {
      key: "skupinove_cvicenia",
      name: "Skupinové cvičenia",
      component: Fyzio9,
    },
    motodlaha: {
      key: "motodlaha",
      name: "Monodlaha",
      component: Fyzio10,
    },
  },
  rehab: {
    vykonny_indukcny_system: {
      key: "vykonny_indukcny_system",
      name: "Výkonný indukčný systém",
      component: Fyzio1,
    },
    laser_12: {
      key: "laser_12",
      name: "Laserová terapia",
      component: Fyzio2,
    },
    tr_therapy: {
      key: "tr_therapy",
      name: "TR terapia",
      component: Fyzio3,
    },
    plazmoterapia: {
      key: "plazmoterapia",
      name: "Plazmoterapia",
      component: Orthopedic4,
    },
    sm_system: {
      key: "sm_system",
      name: "SM systém",
      component: Fyzio5,
    },
  },
  denzito: {
    denzitometricke_vysetrenie: {
      key: "denzitometricke_vysetrenie",
      name: "Denzitometrické vyšetrenie",
      component: Denzito1,
    }
  }
}