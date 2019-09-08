import React, { Component } from "react";
import { Fade } from 'react-reveal';

import './Home.css';
import './Shared.css';
import './Contacts.css';

import LM from '../assets/contacts/LM.png';
import RK from '../assets/contacts/RK.png';
import dovera from '../assets/contacts/dov.png';
import union from '../assets/contacts/union.png';
import vzp from '../assets/contacts/vzp.png';


export const Contacts = props => {
  const section = 'contacts'
  return (
    <Fade>
      <div className="co-contact-container co-content-container">
        <p className="co-container__header co-center">Kontakty</p>
        <div className="co-container__contacts co-center">
          <div className="co-container__contact co-center">
            <p className="co-container__contact-header">LIPTOVSKÝ MIKULÁŠ</p>
            <img className="co-container__contact-image" src={LM}/>
            <div className="co-container__contact-address">
              <p>ulica Čsl. brigády 1078/25</p>
              <p>031 01 Liptovský Mikuláš</p>
            </div>
          </div>
          <div className="co-container__contact co-center">
            <p className="co-container__contact-header">RUŽOMBEROK</p>
            <img className="co-container__contact-image" src={RK}/>
            <div className="co-container__contact-address">
                <p>ulica Gen. Miloša Vesela 4</p>
                <p>003 401 Ružomberok</p>
            </div>
          </div>
        </div>

        <div className="co-container__contacts co-center">
          <div className="co-container__contact co-center">
            <div className="co-container__ambulances">
              <p>Ortopedická ambulancia</p>
              <p>Denzitometrická ambulancia</p>
              <p>Fyzioterapeutické centrum</p>
            </div>
          </div>
          <div className="co-container__contact co-center">
            <div className="co-container__ambulances">
              <p>Ortopedická ambulancia</p>
              <p>Denzitometrická ambulancia</p>
            </div>
          </div>
        </div>

        <div className="co-container__contacts co-center">
          <div className="co-container__contact co-center">
            <div className="co-container__phone co-center">
              <p className="co-phone__paragraph">+421 908 559 515</p>
            </div>
          </div>
          <div className="co-container__contact co-center">
            <div className="co-container__phone co-center">
              <p className="co-phone__paragraph">+421 917 714 695</p>
            </div>
          </div>
        </div>

        <div className="co-container__contacts co-center">
          <div className="co-container__contact co-center">
            <p className="co-companies__paragraph">Zmluvné poisťovne pre ortopedickú ambulanciu</p>
            <div className="co-container__companies">
              <img className="co-container__company-image" src={dovera}/>
              <img className="co-container__company-image" src={union}/>
              <img className="co-container__company-image" src={vzp}/>
            </div>
          </div>
          <div className="co-container__contact co-center">
            <p className="co-companies__paragraph">Zmluvné poisťovne pre ortopedickú ambulanciu</p>
            <div className="co-container__companies">
              <img className="co-container__company-image" src={union}/>
            </div>
          </div>
        </div>

        


      </div>
    </Fade>
  );
}