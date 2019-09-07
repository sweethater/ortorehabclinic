import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Fade, Slide } from 'react-reveal';

import logo from '../assets/logo-white.png';
import detskyUltrazvuk from '../assets//carousel/detsky-ultrazvuk.jpg';
import smSystem from '../assets//carousel/sm-system.jpg';
import trTherapy from '../assets//carousel/tr-therapy.jpg';
import './Home.css';
 
export const Home = props => {
  return (
    <Fade>
      <div className="co-home-container co-contant-container">
        <img className="co-home-container__logo-image" src={logo}/>
        <p className="co-home-container__paragraph">ORTO REHAB CLINIC je dynamicky sa rozvíjajúcim moderným zdravotníckym pracoviskom, ktoré poskytuje svojim pacientom vysoko kvalifikovanú lekársku starostlivosť v špecializovanom odbore ortopédia, denzitometria, cievna chirurgia a fyzioterapia.</p>
        <p className="co-home-container__paragraph">ORTO REHAB CLINIC disponuje najmodernejšou zdravotníckou technikou v segmente ambulantnej zdravotnej starostlivosti, a to nielen v oblasti ortopédie, denzitometrie, ale aj fyzioterapie.</p>
        <p className="co-home-container__paragraph">Hlavnou devízou ORTO REHAB CLINIC je najmä efektívne objednávanie pacientov a minimálne čakacie doby, čo nám umožňuje rýchlo definovať a identifikovať zdravotný problém pacienta.</p>
        <div className="co-home-container__carousel">
          <Carousel centered
            infinite
            arrows
            itemWidth={1100}
            offset={20}
            slidesPerPage={2}>
            <NavLink className="nav" to="/stuff"><img className="co-home-container__carousel-image" src={detskyUltrazvuk} href="#"/></NavLink>
            <NavLink className="nav" to="/stuff"><img className="co-home-container__carousel-image" src={smSystem} href="#"/></NavLink>
            <NavLink className="nav" to="/stuff"><img className="co-home-container__carousel-image" src={trTherapy} href="#"/></NavLink>
          </Carousel>
        </div>
      </div>
    </Fade>
  );
}

export const Patient = props => {
  return (
    <Fade>
      <div className="co-patient-container co-contant-container">
        <img className="co-home-container__logo-image" src={logo}/>
        <p className="co-home-container__paragraph">ORTO REHAB CLINIC je dynamicky sa rozvíjajúcim moderným zdravotníckym pracoviskom, ktoré poskytuje svojim pacientom vysoko kvalifikovanú lekársku starostlivosť v špecializovanom odbore ortopédia, denzitometria, cievna chirurgia a fyzioterapia.</p>
        <p className="co-home-container__paragraph">ORTO REHAB CLINIC disponuje najmodernejšou zdravotníckou technikou v segmente ambulantnej zdravotnej starostlivosti, a to nielen v oblasti ortopédie, denzitometrie, ale aj fyzioterapie.</p>
        <p className="co-home-container__paragraph">Hlavnou devízou ORTO REHAB CLINIC je najmä efektívne objednávanie pacientov a minimálne čakacie doby, čo nám umožňuje rýchlo definovať a identifikovať zdravotný problém pacienta.</p>

      </div>
    </Fade>
  );
}

export const Orthopedic = props => {
  return (
    <Fade>
      <div className="co-orthopedic-container co-contant-container">
        <img className="co-home-container__logo-image" src={logo}/>
        <p className="co-home-container__paragraph">ORTO REHAB CLINIC je dynamicky sa rozvíjajúcim moderným zdravotníckym pracoviskom, ktoré poskytuje svojim pacientom vysoko kvalifikovanú lekársku starostlivosť v špecializovanom odbore ortopédia, denzitometria, cievna chirurgia a fyzioterapia.</p>
        <p className="co-home-container__paragraph">ORTO REHAB CLINIC disponuje najmodernejšou zdravotníckou technikou v segmente ambulantnej zdravotnej starostlivosti, a to nielen v oblasti ortopédie, denzitometrie, ale aj fyzioterapie.</p>
        <p className="co-home-container__paragraph">Hlavnou devízou ORTO REHAB CLINIC je najmä efektívne objednávanie pacientov a minimálne čakacie doby, čo nám umožňuje rýchlo definovať a identifikovať zdravotný problém pacienta.</p>

      </div>
    </Fade>
  );
}

export const Fyzio = props => {
  return (
    <div className="co-fyzio-container co-contant-container">

    </div>
  );
}

export const Rehab = props => {
  return (
    <div className="co-rehab-container co-contant-container">

    </div>
  );
}

export const Denzito = props => {
  return (
    <div className="co-denzito-container co-contant-container">

    </div>
  );
}

export const Gallery = props => {
  return (
    <div className="co-gallery-container co-contant-container">

    </div>
  );
}

export const Fees = props => {
  return (
    <div className="co-fees-container co-contant-container">

    </div>
  );
}

export const Contact = props => {
  return (
    <div className="co-contact-container co-contant-container">

    </div>
  );
}