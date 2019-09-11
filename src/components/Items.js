import React, { Component } from "react";
import { Fade } from 'react-reveal';

import { allSectionItems } from "./Shared";

import './Shared.css';

const getComponent = (componentName) => {
  switch (componentName) {
    case "Orthopedic1":
      return Orthopedic1;
    default:
      return Orthopedic1;
  }
}

export const ItemWrapper = props => {
  // console.log(props);
  const item = props.match.params.item;
  const section = props.location.pathname.split("/").filter(Boolean)[0];
  const itemData = allSectionItems[section][item];
  const { name, component } = itemData;
  const Component = getComponent(component);
  return (
    <Fade>
      <div className={`co-${section}-container co-item-container co-content-container`}>
        <p className="co-container__header co-center">{name}</p>
        <div className="co-container__tabs co-center">
          <Component />
        </div>
      </div>
    </Fade>
  );
}

export const Orthopedic1 = props => {
  return (
    <React.Fragment>
      <p className="co-container__paragraph co-center">nSTRIDE APS je nová terapia určená na liečbu bolesti pri osteoartróze kolena, ktorá spomaľuje progresiu osteoartrózy a deštrukciu chrupavky v kolene.</p>
      <p className="co-container__section-header co-center">ČO JE NSTRIDE APS?</p>
      <p className="co-container__paragraph co-center">nSTRIDE APS spracováva vašu vlastnú krv a poskytuje jedinečný výstupný produkt, ktorý sa aplikuje priamo do kolenného kĺbu a dodáva mu potrebné protizápalové proteíny. V laboratórnych testoch mali tieto proteíny potvrdené excelentné výsledky v spomalení degradácie chrupavky kolena a pri liečbe bolesti.?</p>

      <p className="co-container__section-header co-center">ČO SPÔSOBUJE ZÁPAL A BOLESŤ?</p>
      <p className="co-container__paragraph co-center">V osteoartritickom kolene prevyšuje množstvo zápalových cytokínov IL-1 a TNF (tzv. „zlé“ proteíny) nad množstvom protizápalových cytokínov IL-1ra, sIL-1R, sTNF-RI a sTNF-RII (tzv. „dobré“ proteíny), čo spôsobuje <b>nerovnováhu</b> vedúcu k bolesti kolena a degenerácii chrupavky.</p>
      <p className="co-container__paragraph co-center"><b>Pomocou nSTRIDE APS</b> aplikujeme vysoké hladiny „dobrých“ proteínov (IL-1ra, sIL-1R, sTNF-RI a sTNF-Rll), ktoré slúžia na blokovanie zvýšeného množstva zápalových cytokínov IL-1 a TNF a tým nastavíme rovnováhu v kĺbe. Laboratórne štúdie ako aj štúdie na ľuďoch ukázali, že nSTRIDE APS má na rozdiel od tradičných terapií signifi kantne lepšie výsledky na zníženie bolesti a spomalenie degenerácie chrupavky.</p>
      <p className="co-container__paragraph co-center">Kým sa obnovuje rovnováha proteínov v kolene (2-6 týždňov), aplikáciou <b>nSTRIDE APS</b> zavádzame do kolena aj (stavebné) rastové faktory (IGF-1 a TGF-1). Preto nSTRIDE APS vytvára novú terapiu, ktorá zmierňuje bolesť v kolennom kĺbe, zlepšuje funkciu kĺbov a spomaľuje degradáciu chrupavky. Táto terapia sa poskytuje v lekárskej ambulancii bez chirurgického zákroku.</p>

      <p className="co-container__section-header co-center">ČO JE NSTRIDE APS?</p>
      <p className="co-container__paragraph co-center">ČO JE NSTRIDE APS?</p>
    </React.Fragment>
  )
}

export const ItemTabbed = props => {
  console.log(props)
  // const {itemName} = props
  const itemName = "TEST"
  return (
    <Fade>
      <div className="co-item-container co-content-container">
        <p className="co-container__header co-center">{itemName}</p>
        <div className="co-container__paragraphs co-center">

        </div>
      </div>
    </Fade>
  );
}

export const ItemSimple = props => {
  const {itemName, content} = props
  return (
    <Fade>
      <div className="co-item-container co-content-container">
        <p className="co-container__header co-center">{itemName}</p>
        <div className="co-container__paragraphs co-center">

        </div>
      </div>
    </Fade>
  );
}