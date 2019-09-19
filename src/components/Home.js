import React from "react";
import { NavLink } from 'react-router-dom';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Fade } from 'react-reveal';

import { ComponentMenuItem } from "./Nav";
import { allSectionItems } from "./Shared";

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
  const { section } = props;
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
  const { section } = props;
  const sectionItems = allSectionItems[section];
  return (
    <Fade>
      <div className="co-orthopedic-container co-content-container">
        <p className="co-container__header co-center">ORTOPEDICKÁ AMBULANCIA</p>
        <div className="co-container__paragraphs co-center">
          <p className="co-container__paragraph co-center">Ortopedická ambulancia je vysoko kvalifikovaná špecializovaná ambulancia v špecializačnom odbore ortopédia.</p>
          <p className="co-container__paragraph co-center">Ortopédia je špecializačný medicínsky odbor, ktorý sa zaoberá vývojom, formovaním a ochoreniami, vrodenými a získanými deformitami, funkčnými ochoreniami, poraneniami podporného a pohybového aparátu, všetkých vekových kategórii, ich diagnostikou, liečbou a prevenciou, rehabilitáciou, posudzovaním a vedeckým výskumom. Okrem možností konzervatívnej liečby, najmä medikamentóznej a rehabilitačnej, využívame aj operačné liečebné postupy, ktoré sú v odbore ortopédia dominantné. Realizujeme nadštandardné interaktívne diagnostické a terapeutické postupy, etiopatogenetické analýzy a metódy regeneratívnej ortopédie.</p>
        </div>
        <div className="co-container-menu co-center">
          <NavLink className="nav" to={`/orthopedic/${sectionItems.liecba_autolognymi_proteinmi.key}`}><ComponentMenuItem title={`${sectionItems.liecba_autolognymi_proteinmi.name}`} section={section} imageName={`${sectionItems.liecba_autolognymi_proteinmi.key}`}></ComponentMenuItem></NavLink>
          <NavLink className="nav" to={`/orthopedic/${sectionItems.detsky_ultrazvuk.key}`}><ComponentMenuItem title={`${sectionItems.detsky_ultrazvuk.name}`} section={section} imageName={`${sectionItems.detsky_ultrazvuk.key}`}></ComponentMenuItem></NavLink>
          <NavLink className="nav" to={`/orthopedic/${sectionItems.ortopedicke_vysetrenia.key}`}><ComponentMenuItem title={`${sectionItems.ortopedicke_vysetrenia.name}`} section={section} imageName={sectionItems.ortopedicke_vysetrenia.key}></ComponentMenuItem></NavLink>
          <NavLink className="nav" to={`/orthopedic/${sectionItems.plazmoterapia.key}`}><ComponentMenuItem title={`${sectionItems.plazmoterapia.name}`} section={section} imageName={sectionItems.plazmoterapia.key}></ComponentMenuItem></NavLink>
        </div>
        <div className="co-container-menu co-center">
          <NavLink className="nav" to={`/orthopedic/${sectionItems.razove_vlny.key}`}><ComponentMenuItem title={`${sectionItems.razove_vlny.name}`} section={section} imageName={sectionItems.razove_vlny.key}></ComponentMenuItem></NavLink>
          <NavLink className="nav" to={`/orthopedic/${sectionItems.biostimulacny_laser.key}`}><ComponentMenuItem title={`${sectionItems.biostimulacny_laser.name}`} section={section} imageName={sectionItems.biostimulacny_laser.key}></ComponentMenuItem></NavLink>
          <NavLink className="nav" to={`/orthopedic/${sectionItems.kolagenove_injekcie.key}`}><ComponentMenuItem title={`${sectionItems.kolagenove_injekcie.name}`} section={section} imageName={sectionItems.kolagenove_injekcie.key}></ComponentMenuItem></NavLink>
          <NavLink className="nav" to={`/orthopedic/${sectionItems.ortopedicke_konzultacie.key}`}><ComponentMenuItem title={`${sectionItems.ortopedicke_konzultacie.name}`} section={section} imageName={sectionItems.ortopedicke_konzultacie.key}></ComponentMenuItem></NavLink>
        </div>
      </div>
    </Fade>
  );
}

export const Fyzio = props => {
  const { section } = props;
  const sectionItems = allSectionItems[section];
  return (
    <Fade>
      <div className="co-fyzio-container co-content-container">
          <p className="co-container__header co-center">FYZIOTERAPIA</p>
          <div className="co-container__paragraphs co-center">
            <p className="co-container__paragraph co-center"><b>Fyzioterapia je nelekársky odbor</b>, ktorý sa zaoberá diagnostikou, liečbou a prevenciou porúch pohybového systému človeka. Je jednou z oblastí rehabilitácie. Je to liečba smerujúca k udržaniu, podpore, obnove maximálnej funkčnej zdatnosti alebo spomaleniu progresie u osoby s vrodenou chybou, chorobou alebo úrazom s cieľom prinavrátiť stratené schopnosti alebo funkcie ľudského organizmu ako celku.</p>
          </div>
          <div className="co-container-menu co-center">
            <NavLink className="nav" to={`/${section}/${sectionItems.vykonny_indukcny_system.key}`}><ComponentMenuItem title={`${sectionItems.vykonny_indukcny_system.name}`} section={section} imageName={`${sectionItems.vykonny_indukcny_system.key}`}></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}/${sectionItems.laser_12.key}`}><ComponentMenuItem title={`${sectionItems.laser_12.name}`} section={section} imageName={`${sectionItems.laser_12.key}`}></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}/${sectionItems.tr_therapy.key}`}><ComponentMenuItem title={`${sectionItems.tr_therapy.name}`} section={section} imageName={`${sectionItems.tr_therapy.key}`}></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}/${sectionItems.makke_techniky.key}`}><ComponentMenuItem title={`${sectionItems.makke_techniky.name}`} section={section} imageName={`${sectionItems.makke_techniky.key}`}></ComponentMenuItem></NavLink>
          </div>
          <div className="co-container-menu co-center">
            <NavLink className="nav" to={`/${section}/${sectionItems.sm_system.key}`}><ComponentMenuItem title={`${sectionItems.sm_system.name}`} section={section} imageName={`${sectionItems.sm_system.key}`}></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}/${sectionItems.trx.key}`}><ComponentMenuItem title={`${sectionItems.trx.name}`} section={section} imageName={`${sectionItems.trx.key}`}></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}/${sectionItems.kineziotaping.key}`}><ComponentMenuItem title={`${sectionItems.kineziotaping.name}`} section={section} imageName={`${sectionItems.kineziotaping.key}`}></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}/${sectionItems.individualne_cvicenia.key}`}><ComponentMenuItem title={`${sectionItems.individualne_cvicenia.name}`} section={section} imageName={`${sectionItems.individualne_cvicenia.key}`}></ComponentMenuItem></NavLink>
          </div>
          <div className="co-container-menu co-center">
            <NavLink className="nav" to={`/${section}/${sectionItems.skupinove_cvicenia.key}`}><ComponentMenuItem title={`${sectionItems.skupinove_cvicenia.name}`} section={section} imageName={`${sectionItems.skupinove_cvicenia.key}`}></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}/${sectionItems.motodlaha.key}`}><ComponentMenuItem title={`${sectionItems.motodlaha.name}`} section={section} imageName={`${sectionItems.motodlaha.key}`}></ComponentMenuItem></NavLink>
          </div>
      </div>
    </Fade>
  );
}

export const Rehab = props => {
  const { section } = props;
  const sectionItems = allSectionItems[section];
  return (
    <Fade>
      <div className="co-rehab-container co-content-container">
        <p className="co-container__header co-center">ŠPORTOVÁ REHABILITÁCIA</p>
        <div className="co-container__paragraphs co-center">
          <p className="co-container__paragraph co-center">Klinika poskytuje rôzne služby spojené so športovou rehabilitáciou. Zoznam poskytovaných služieb si môžete pozrieť nižšie.</p>
        </div>
        <div className="co-container-menu co-center">
            <NavLink className="nav" to={`/${section}/${sectionItems.vykonny_indukcny_system.key}`}><ComponentMenuItem title={`${sectionItems.vykonny_indukcny_system.name}`} section={section} imageName={`${sectionItems.vykonny_indukcny_system.key}`}></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}/${sectionItems.laser_12.key}`}><ComponentMenuItem title={`${sectionItems.laser_12.name}`} section={section} imageName={`${sectionItems.laser_12.key}`}></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}/${sectionItems.tr_therapy.key}`}><ComponentMenuItem title={`${sectionItems.tr_therapy.name}`} section={section} imageName={`${sectionItems.tr_therapy.key}`}></ComponentMenuItem></NavLink>
            <NavLink className="nav" to={`/${section}/${sectionItems.plazmoterapia.key}`}><ComponentMenuItem title={`${sectionItems.plazmoterapia.name}`} section={section} imageName={sectionItems.plazmoterapia.key}></ComponentMenuItem></NavLink>
          </div>
          <div className="co-container-menu co-center">
            <NavLink className="nav" to={`/${section}/${sectionItems.sm_system.key}`}><ComponentMenuItem title={`${sectionItems.sm_system.name}`} section={section} imageName={`${sectionItems.sm_system.key}`}></ComponentMenuItem></NavLink>
          </div>
      </div>
    </Fade>
  );
}

export const Denzito = props => {
  const { section } = props;
  const sectionItems = allSectionItems[section];
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
          <NavLink className="nav" to={`/${section}/${sectionItems.denzitometricke_vysetrenie.key}`}><ComponentMenuItem title={`${sectionItems.denzitometricke_vysetrenie.name}`} section={section} imageName={`${sectionItems.denzitometricke_vysetrenie.key}`}>></ComponentMenuItem></NavLink>
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
