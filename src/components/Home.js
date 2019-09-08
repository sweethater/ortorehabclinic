import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Fade, Slide } from 'react-reveal';

import { ComponentMenuItem } from "./Nav";

import logo from '../assets/logo-white.png';
import detskyUltrazvuk from '../assets//carousel/detsky-ultrazvuk.jpg';
import smSystem from '../assets//carousel/sm-system.jpg';
import trTherapy from '../assets//carousel/tr-therapy.jpg';
import './Home.css';
import './Shared.css'
 
export const Home = props => {
  return (
    <Fade>
      <div className="co-home-container co-content-container">
        <img className="co-container__logo-image" src={logo}/>
        <p className="co-container__paragraph">ORTO REHAB CLINIC je dynamicky sa rozvíjajúcim moderným zdravotníckym pracoviskom, ktoré poskytuje svojim pacientom vysoko kvalifikovanú lekársku starostlivosť v špecializovanom odbore ortopédia, denzitometria, cievna chirurgia a fyzioterapia.</p>
        <p className="co-container__paragraph">ORTO REHAB CLINIC disponuje najmodernejšou zdravotníckou technikou v segmente ambulantnej zdravotnej starostlivosti, a to nielen v oblasti ortopédie, denzitometrie, ale aj fyzioterapie.</p>
        <p className="co-container__paragraph">Hlavnou devízou ORTO REHAB CLINIC je najmä efektívne objednávanie pacientov a minimálne čakacie doby, čo nám umožňuje rýchlo definovať a identifikovať zdravotný problém pacienta.</p>
        <div className="co-container__carousel co-center">
          <Carousel centered
            infinite
            arrows
            itemWidth={1100}
            offset={20}
            slidesPerPage={2}>
            <NavLink className="nav" to="/stuff"><img className="co-container__carousel-image" src={detskyUltrazvuk} href="#"/></NavLink>
            <NavLink className="nav" to="/stuff"><img className="co-container__carousel-image" src={smSystem} href="#"/></NavLink>
            <NavLink className="nav" to="/stuff"><img className="co-container__carousel-image" src={trTherapy} href="#"/></NavLink>
          </Carousel>
        </div>
      </div>
    </Fade>
  );
}

export const Patient = props => {
  return (
    <Fade>
      <div className="co-patient-container co-content-container">
        <img className="co-container__logo-image" src={logo}/>
        <p className="co-container__paragraph">ORTO REHAB CLINIC je dynamicky sa rozvíjajúcim moderným zdravotníckym pracoviskom, ktoré poskytuje svojim pacientom vysoko kvalifikovanú lekársku starostlivosť v špecializovanom odbore ortopédia, denzitometria, cievna chirurgia a fyzioterapia.</p>
        <p className="co-container__paragraph">ORTO REHAB CLINIC disponuje najmodernejšou zdravotníckou technikou v segmente ambulantnej zdravotnej starostlivosti, a to nielen v oblasti ortopédie, denzitometrie, ale aj fyzioterapie.</p>
        <p className="co-container__paragraph">Hlavnou devízou ORTO REHAB CLINIC je najmä efektívne objednávanie pacientov a minimálne čakacie doby, čo nám umožňuje rýchlo definovať a identifikovať zdravotný problém pacienta.</p>

      </div>
    </Fade>
  );
}

export const Orthopedic = props => {
  const section = "orthopedic";
  return (
    <Fade>
      <div className="co-orthopedic-container co-content-container">
        <p className="co-container__header co-center">ORTOPEDICKÁ AMBULANCIA</p>
        <div className="co-container__paragraphs co-center">
          <p className="co-container__paragraph co-center">Ortopedická ambulancia je vysoko kvalifikovaná špecializovaná ambulancia v špecializačnom odbore ortopédia.</p>
          <p className="co-container__paragraph co-center">Ortopédia je špecializačný medicínsky odbor, ktorý sa zaoberá vývojom, formovaním a ochoreniami, vrodenými a získanými deformitami, funkčnými ochoreniami, poraneniami podporného a pohybového aparátu, všetkých vekových kategórii, ich diagnostikou, liečbou a prevenciou, rehabilitáciou, posudzovaním a vedeckým výskumom. Okrem možností konzervatívnej liečby, najmä medikamentóznej a rehabilitačnej, využívame aj operačné liečebné postupy, ktoré sú v odbore ortopédia dominantné. Realizujeme nadštandardné interaktívne diagnostické a terapeutické postupy, etiopatogenetické analýzy a metódy regeneratívnej ortopédie.</p>
        </div>
        <div className="co-container-menu co-center">
          <NavLink className="nav" to="/orthopedic"><ComponentMenuItem title="Liečba autolognými proteínmi" section={section} imageName="liecba_autolognymi_proteinmi"></ComponentMenuItem></NavLink>
          <NavLink className="nav" to="/orthopedic"><ComponentMenuItem title="Detský ultrazvuk - USG" section={section} imageName="detsky_ultrazvuk"></ComponentMenuItem></NavLink>
          <NavLink className="nav" to="/orthopedic"><ComponentMenuItem title="Ortopedické vyšetrenia" section={section} imageName="ortopedicke_vysetrenia"></ComponentMenuItem></NavLink>
          <NavLink className="nav" to="/orthopedic"><ComponentMenuItem title="Plazmoterapia" section={section} imageName="plazmoterapia"></ComponentMenuItem></NavLink>
        </div>
        <div className="co-container-menu co-center">
          <NavLink className="nav" to="/orthopedic"><ComponentMenuItem title="Rázové vlny" section={section} imageName="razove_vlny"></ComponentMenuItem></NavLink>
          <NavLink className="nav" to="/orthopedic"><ComponentMenuItem title="Biostimulačný laser" section={section} imageName="biostimulacny_laser"></ComponentMenuItem></NavLink>
          <NavLink className="nav" to="/orthopedic"><ComponentMenuItem title="Kolagénove injekcie" section={section} imageName="kolagenove_injekcie"></ComponentMenuItem></NavLink>
          <NavLink className="nav" to="/orthopedic"><ComponentMenuItem title="Konzultácie a posúdenia	" section={section} imageName="ortopedicke_konzultacie"></ComponentMenuItem></NavLink>
        </div>
      </div>
    </Fade>
  );
}

export const Fyzio = props => {
  const section = "fyzio";
  return (
    <Fade>
      <div className="co-fyzio-container co-content-container">
          <p className="co-container__header co-center">FYZIOTERAPIA</p>
          <div className="co-container__paragraphs co-center">
            <p className="co-container__paragraph co-center"><b>Fyzioterapia je nelekársky odbor</b>, ktorý sa zaoberá diagnostikou, liečbou a prevenciou porúch pohybového systému človeka. Je jednou z oblastí rehabilitácie. Je to liečba smerujúca k udržaniu, podpore, obnove maximálnej funkčnej zdatnosti alebo spomaleniu progresie u osoby s vrodenou chybou, chorobou alebo úrazom s cieľom prinavrátiť stratené schopnosti alebo funkcie ľudského organizmu ako celku.</p>
          </div>
          <div className="co-container-menu co-center">
            <NavLink className="nav" to={`/${section}`}><ComponentMenuItem title="Výkonný indukčný systém" section={section} imageName="vykonny_indukcny_system"></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}`}><ComponentMenuItem title="Laser 12 W - high intensity" section={section} imageName="laser_12"></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}`}><ComponentMenuItem title="TR therapy" section={section} imageName="tr_therapy"></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}`}><ComponentMenuItem title="Mäkké techniky" section={section} imageName="makke_techniky"></ComponentMenuItem></NavLink>
          </div>
          <div className="co-container-menu co-center">
            <NavLink className="nav" to={`/${section}`}><ComponentMenuItem title="SM systém" section={section} imageName="sm_system"></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}`}><ComponentMenuItem title="TRX" section={section} imageName="trx"></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}`}><ComponentMenuItem title="Kinesiotaping" section={section} imageName="kineziotaping"></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}`}><ComponentMenuItem title="Individuálne cvičenia" section={section} imageName="individualne_cvicenia"></ComponentMenuItem></NavLink>
          </div>
          <div className="co-container-menu co-center">
            <NavLink className="nav" to={`/${section}`}><ComponentMenuItem title="Skupinové cvičenia" section={section} imageName="skupinove_cvicenia"></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}`}><ComponentMenuItem title="Monodlaha" section={section} imageName="motodlaha"></ComponentMenuItem></NavLink>
          </div>
      </div>
    </Fade>
  );
}

export const Rehab = props => {
  const section = "rehab";
  return (
    <Fade>
      <div className="co-rehab-container co-content-container">
        <p className="co-container__header co-center">ŠPORTOVÁ REHABILITÁCIA</p>
        <div className="co-container__paragraphs co-center">
          <p className="co-container__paragraph co-center">Klinika poskytuje rôzne služby spojené so športovou rehabilitáciou. Zoznam poskytovaných služieb si môžete pozrieť nižšie.</p>
        </div>
        <div className="co-container-menu co-center">
            <NavLink className="nav" to={`/${section}`}><ComponentMenuItem title="Výkonný indukčný systém" section={section} imageName="vykonny_indukcny_system"></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}`}><ComponentMenuItem title="Laser 12 W - high intensity" section={section} imageName="laser_12"></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}`}><ComponentMenuItem title="TR therapy" section={section} imageName="tr_therapy"></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}`}><ComponentMenuItem title="Plazmo terapia" section={section} imageName="plazmoterapia"></ComponentMenuItem></NavLink>
          </div>
          <div className="co-container-menu co-center">
            <NavLink className="nav" to={`/${section}`}><ComponentMenuItem title="SM systém" section={section} imageName="sm_system"></ComponentMenuItem></NavLink>
          </div>
      </div>
    </Fade>
  );
}

export const Denzito = props => {
  const section = "denzito";
  return (
    <Fade>
      <div className="co-denzito-container co-content-container">
        <p className="co-container__header co-center">DENZITOMETRIA</p>
        <div className="co-container__paragraphs co-center">
            <p className="co-container__paragraph co-center">Denzitometrická ambulancia je vybavená najmodernejším denzitometrickým zariadením.</p>
            <p className="co-container__paragraph co-center">Denzitometria je neinvazívne, bezbolestné, rýchle a presné vyšetrenie, pomocou ktorého sa stanovuje hustota kosti. Pomocou celotelového denzitometra Hologic QDR Discovery vieme neinvazívnym spôsobom prostredníctvom mäkkých rtg lúčov zistiť diagnózu osteoporózy i stupeň rednutia kosti a následne odporučiť vhodnú liečbu.</p>
            <p className="co-container__paragraph co-center">Tento prístroj, na základe zabudovaného softwaru, porovnáva snímané kosti voči zdravému kostnému tkanivu. Kosti sa snímajú z dvoch lokalít: z driekových stavcov, kde sa ochorenie najčastejšie začína a z oblasti krčka stehennej kosti, časti stehna, kde sa najčastejšie kosť lomí. Software je aplikovateľný ako u dospelých tak aj u detí.</p>
        </div>
        <div className="co-container-menu co-center">
          <NavLink className="nav" to={`/${section}`}><ComponentMenuItem title="Denzitometrické vyšetrenie" section={section} imageName="denzitometricke_vysetrenie"></ComponentMenuItem></NavLink>
        </div>
      </div>
    </Fade>
  );
}

export const Gallery = props => {
  return (
    <div className="co-gallery-container co-content-container">
      <p className="co-container__header co-center">GALÉRIA</p>
    </div>
  );
}

export const Contact = props => {
  return (
    <div className="co-contact-container co-content-container">
      <p className="co-container__header co-center">KONTAKT</p>
    </div>
  );
}