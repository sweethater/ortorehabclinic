import React from "react";

import { TabList, TabListLinks } from './Tabs';

import 'antd/dist/antd.css';
import './Tabs.css';
import './Shared.css';


const AdditionalTreatment = () => {
  return <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabListLinks items={["Výkonný indukčný systém", "Plazmoterapia", "TR terapia", "Mäkké techniky", "SM systém"]} />
      <TabListLinks items={["TRX", "Kinesiotaping", "Kinesiotaping", "Skupinové cvičenia", "Motodlaha"]} />
    </div>
  </React.Fragment>
}

export const Fyzio1 = {
  about: <p className="co-container__paragraph co-center">Prístroj generuje pulzné elektromagnetické pole. Na rozdiel od klasickej magnetoterapie využíva vysokú indukciu (až 2,5 Tesla), čo umožňuje elektromagnetickú stimuláciu aj hlboko uložených tkanív. <b>Výrazný, rýchly, dlhotrvajúci analgetický účinok.</b> Ako dominantný sa pri tejto terapii javí disperzný účinok, a to ako priamy, tak aj prostredníctvom aktivácie sympatiku na spinálnej etáži, s následným zlepšením tixotropných vlastností tkanív v aplikovanej oblasti.</p>,
  tabs: [{
    tabName: "INDUKČNÝ SYSTÉM",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["znižuje bolesť (analgetický efekt)", "zmenšuje opuch", "zlepšuje rozsah postihnutých kĺbov", "zlepšuje vlastnosti väziva", "zlepšuje vlastnosti synoviálnej tekutiny v kĺboch"]} />
      <div className="co-tabs__paragraphs co-center">
        <p className="co-tabs__paragraph co-left">Prístroj generuje pulzné elektromagnetické pole. Na rozdiel od klasickej magnetoterapie využíva vysokú indukciu (až 2,5 Tesla), čo umožňuje elektromagnetickú stimuláciu aj hlboko uložených tkanív. Výrazný, rýchly, dlhotrvajúci analgetický účinok.</p>
        <p className="co-tabs__paragraph co-left">Ako dominantný sa pri tejto terapii javí disperzný účinok, a to ako priamy, tak aj prostredníctvom aktivácie sympatiku na spinálnej etáži, s následným zlepšením tixotropných vlastností tkanív v aplikovanej oblasti.</p>
      </div>
    </div>
  </React.Fragment>,
  }, {
    tabName: "INDIKÁCIE",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["achilodynia", "analgézia", "antiedematózny efekt", "artritída - reumatoidná", "artróza", "bechterevova choroba", "burzitída", "cervikalgie", "distorzia", "elektrogymnastika", "epikondylitída", "facilitácia dýchania", "fraktúra", "gonalgia"]} />
      <TabList items={["hematóm", "hyperemizační a trofotropní efekt", "impingement syndróm", "jazva", "kalcifikácia - extraartikulárna", "lumbosakrální syndróm", "mobilizácia kĺbu", "myalgia", "natiahnutý sval", "nervová regenerácia", "neuralgia", "neuropatia", "osgood-schlatterova choroba", "pätna ostroha"]} />
      <TabList items={["poúrazové hojenie", "predrehabilitačná facilitácia", "redukcia spasticity", "svalová atrofia - prevencia", "svalová regenerácia", "svalová relaxácia", "svalový spazmus", "syndróm karpálneho tunela", "syndróm tarzálního tunela", "tendinopatie", "terapia po mozgovej mŕtvici", "thorakalgia", "tromboembolické prevencia", "hernia disku"]} />
    </div>
  </React.Fragment>,
  }, {
    tabName: "VIDEO",
    tabContent: <React.Fragment></React.Fragment>,
  }, {
    tabName: "DOPLNKOVÁ LIEČBA",
    tabContent: <AdditionalTreatment />,
  }],
};

export const Fyzio2 = {
  about: <p className="co-container__paragraph co-center">Biostimulačné a liečebné účinky laserovej terapie sú známe už od roku 1960. Výraz "biostimulačný" znamená schopnosť "bio-stimulovať" - rast tkaniva a oprava na bunkovej úrovni. Laserové svetlo možno vďaka jeho monochromatickému a súvislému charakteru presne nastaviť a definovať tak vopred jeho správanie. Vlnové dĺžky 810/980nm a 1064nm sú špecifické vysokým výkonom, ktorým pôsobí na biologické chromofóry. To umožňuje maximálny terapeutický účinok bez ožarovania okolitej oblasti. Maximálny výkon 12W umožňuje výnimočne hlboký prienik laserového svetla. Optimálny pomer absorpcie a prienikovej hĺbky zaručuje účinnú stimuláciu tkanív a receptorov bolesti až do hĺbky 12 cm. Terapia vysokovýkonným laserom predstavuje veľmi jednoduchú a efektívnu liečbu bez vedľajších účinkov, ktorá môže byť zacielená na ľubovoľné bolestivé miesto tela.</p>,
  tabs: [{
    tabName: "HLAVNÉ VÝHODY",
    tabContent: <React.Fragment>
    <div className="co-tab__list-with-paragraphs">
      <div className="co-container__tab-list">
        <TabList items={["Hlboký prienik do tkaniva s výkonom až 12W v trvalom režime", "Max. výkon až 50-krát vyšší než u terapie studeným laserom", "Optimálny terapeutický účinok pomocou vlnových dĺžok 810/980nm či 1064nm", "Pulzný mód pre okamžitú elimináciu bolesti", "Účinná a výkonná terapia pre širokú škálu klinických indikácií"]} />
      </div>
      <div className="co-tabs__paragraphs co-center">
        <p className="co-tabs__paragraph co-left">Vysokovýkonný laser s vlnovou dĺžkou 1000 nm predstavuje súvislé, monochromatické laserové svetlo, ktoré s vysokou účinnosťou podporuje hojenie a regeneráciu väčšiny biologických tkanív.</p>
        <p className="co-tabs__paragraph co-left">Výstupný výkon je približne 30 až 50-krát vyšší ako u bežnej terapie studeným laserom, hĺbka prieniku je takmer neobmedzená. BTL terapia vysokovýkonným laserom tak umožňuje stimulovať a liečiť akékoľvek bolestivé miesto na tele.</p>
        <p className="co-container__paragraph co-left">Použitím lasera s vlnovými dĺžkami okolo hranice 1000 nm pôsobí fotomechanická vlna v podkožnom tkanive. Táto stimulácia zabraňuje bolestivým pocitom, čím pacientovi prináša okamžitú úľavu od bolesti.</p>
      </div>
    </div>
  </React.Fragment>,
  }, {
    tabName: "LIEČEBNÉ ÚČINKY",
    tabContent: <React.Fragment>
    <div className="co-tab__list-with-paragraphs">
      <div className="co-container__tab-list">
        <TabList items={["Biostimulácia", "Regenerácia", "Regenerácia", "Protizápalový účinok", "Vysokoúčinný a dlhotrvajúci analgetický účinok"]} />
      </div>
      <div className="co-tabs__paragraphs co-center">
        <p className="co-tabs__paragraph co-left">Vlnová dĺžka laserového svetla okolo hranice 1000 nm v extrémne krátkom pulznom režime dodáva BTL terapii využívajúcej technológiu vysokovýkonného lasera úplne novú terapeutickú vlastnosť - schopnosť vytvárať mechanickú vlnu v biologickom tkanive. Vlnové dĺžky 1064nm a 980nm sú špeciálne navrhnuté tak, aby sa veľmi dobre vstrebávali v štruktúrach na tekutej báze. Potom, čo sa laserové svetlo dostane na pokožku, vytvára v ľudskom tkanive fotomechanickú vlnu o špecifickej vlnovej dĺžke.</p>
      </div>
    </div>
    <p className="co-tabs__paragraph co-center">Mechanická stimulácia voľných nervových zakončení a ďalších receptorov bolesti v podkožnom tkanive blokuje priechod bolesti nervovým systémom a prináša tak okamžitú úľavu. Táto mechanická vlna navyše stimuluje lokálnu mikrocirkuláciu a podporuje lymfatickú drenáž danej patologickej oblasti. Kombináciou biostimulácie a fotomechanickej stimulácie BTL terapie vysokovýkonným laserom sa tak lieči tkanivo a zároveň je poskytovaná výkonná a nenávyková metóda kontroly bolesti. Vysokovýkonný laser umožňuje liečbu širokého spektra indikáciou od akútnych svalových poranení až po hlboko uložené kĺbové degenerácie.</p>
  </React.Fragment>,
  }, {
    tabName: "Indikácie",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["achillodynie", "akné", "analgézia", "artróza", "artróza kĺbov ruky", "artróza bedrového kĺbu", "bolestivé rameno", "burzitída", "cervikalgia", "distorzie", "distorzie členkového kĺbu"]} />
      <TabList items={["distorzie kolenného kĺbu", "dorsalgie", "epicondylitida", "gonartróza", "herpes labialis", "chronická jazva", "impingement syndróm / frozen shoulder", "lumbosakrálna bolesť", "obrna lícneho nervu", "onychomykóza / fungus", "Osgood-Schlatter syndrome"]} />
      <TabList items={["otvorená rana", "patellární tendinopatie", "plantárna fascitídy / pätná ostroha", "subakútna jazva", "svalová relaxácia / spúšťacie body", "svalové poranenie", "syndróm karpálneho tunela", "syndróm prednej hrany tíbie", "syndróm tarzálního tunela", "tendinopatie", "tendovaginitida"]} />
    </div>
  </React.Fragment>,
  }, {
    tabName: "Video",
    tabContent: <React.Fragment></React.Fragment>,
  }, {
    tabName: "Doplnková liečba",
    tabContent: <AdditionalTreatment />,
  }]
};

export const Fyzio3 = {
  about: <p className="co-container__paragraph co-center">Prístroj generuje pulzné elektromagnetické pole. Na rozdiel od klasickej magnetoterapie využíva vysokú indukciu (až 2,5 Tesla), čo umožňuje elektromagnetickú stimuláciu aj hlboko uložených tkanív. <b>Výrazný, rýchly, dlhotrvajúci analgetický účinok.</b> Ako dominantný sa pri tejto terapii javí disperzný účinok, a to ako priamy, tak aj prostredníctvom aktivácie sympatiku na spinálnej etáži, s následným zlepšením tixotropných vlastností tkanív v aplikovanej oblasti.</p>,
  tabs: [{
    tabName: "PÔSOBENIE V TKANIVE",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["znižuje bolesť (analgetický efekt)", "zmenšuje opuch", "zlepšuje rozsah postihnutých kĺbov", "zlepšuje vlastnosti väziva", "zlepšuje vlastnosti synoviálnej tekutiny v kĺboch"]} />
    </div>
  </React.Fragment>,
  }, {
    tabName: "TERAPIA JE URČENÁ K OŠETRENIU",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["kĺbov – artrózy, artropatie", "entezopatií – úponových bolestí (napr. tenisový lakeť, golfový lakeť)", "bolestí chrbtice (v rámci komplexnej rehabilitácie)", "poúrazových stavov pohybového systému"]} />
    </div>
  </React.Fragment>,
  }]
};

export const Fyzio4 = {
  about: <p className="co-container__paragraph co-center">Prístroj generuje pulzné elektromagnetické pole. Na rozdiel od klasickej magnetoterapie využíva vysokú indukciu (až 2,5 Tesla), čo umožňuje elektromagnetickú stimuláciu aj hlboko uložených tkanív. <b>Výrazný, rýchly, dlhotrvajúci analgetický účinok.</b> Ako dominantný sa pri tejto terapii javí disperzný účinok, a to ako priamy, tak aj prostredníctvom aktivácie sympatiku na spinálnej etáži, s následným zlepšením tixotropných vlastností tkanív v aplikovanej oblasti.</p>,
  tabs: [{
    tabName: "PÔSOBENIE V TKANIVE",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["znižuje bolesť (analgetický efekt)", "zmenšuje opuch", "zlepšuje rozsah postihnutých kĺbov", "zlepšuje vlastnosti väziva", "zlepšuje vlastnosti synoviálnej tekutiny v kĺboch"]} />
    </div>
  </React.Fragment>,
  }, {
    tabName: "TERAPIA JE URČENÁ K OŠETRENIU",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["kĺbov – artrózy, artropatie", "entezopatií – úponových bolestí (napr. tenisový lakeť, golfový lakeť)", "bolestí chrbtice (v rámci komplexnej rehabilitácie)", "poúrazových stavov pohybového systému"]} />
    </div>
  </React.Fragment>,
  }]
};

export const Fyzio5 = {
  about: <p className="co-container__paragraph co-center">Prístroj generuje pulzné elektromagnetické pole. Na rozdiel od klasickej magnetoterapie využíva vysokú indukciu (až 2,5 Tesla), čo umožňuje elektromagnetickú stimuláciu aj hlboko uložených tkanív. <b>Výrazný, rýchly, dlhotrvajúci analgetický účinok.</b> Ako dominantný sa pri tejto terapii javí disperzný účinok, a to ako priamy, tak aj prostredníctvom aktivácie sympatiku na spinálnej etáži, s následným zlepšením tixotropných vlastností tkanív v aplikovanej oblasti.</p>,
  tabs: [{
    tabName: "PÔSOBENIE V TKANIVE",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["znižuje bolesť (analgetický efekt)", "zmenšuje opuch", "zlepšuje rozsah postihnutých kĺbov", "zlepšuje vlastnosti väziva", "zlepšuje vlastnosti synoviálnej tekutiny v kĺboch"]} />
    </div>
  </React.Fragment>,
  }, {
    tabName: "TERAPIA JE URČENÁ K OŠETRENIU",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["kĺbov – artrózy, artropatie", "entezopatií – úponových bolestí (napr. tenisový lakeť, golfový lakeť)", "bolestí chrbtice (v rámci komplexnej rehabilitácie)", "poúrazových stavov pohybového systému"]} />
    </div>
  </React.Fragment>,
  }]
};

export const Fyzio6 = {
  about: <p className="co-container__paragraph co-center">Prístroj generuje pulzné elektromagnetické pole. Na rozdiel od klasickej magnetoterapie využíva vysokú indukciu (až 2,5 Tesla), čo umožňuje elektromagnetickú stimuláciu aj hlboko uložených tkanív. <b>Výrazný, rýchly, dlhotrvajúci analgetický účinok.</b> Ako dominantný sa pri tejto terapii javí disperzný účinok, a to ako priamy, tak aj prostredníctvom aktivácie sympatiku na spinálnej etáži, s následným zlepšením tixotropných vlastností tkanív v aplikovanej oblasti.</p>,
  tabs: [{
    tabName: "PÔSOBENIE V TKANIVE",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["znižuje bolesť (analgetický efekt)", "zmenšuje opuch", "zlepšuje rozsah postihnutých kĺbov", "zlepšuje vlastnosti väziva", "zlepšuje vlastnosti synoviálnej tekutiny v kĺboch"]} />
    </div>
  </React.Fragment>,
  }, {
    tabName: "TERAPIA JE URČENÁ K OŠETRENIU",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["kĺbov – artrózy, artropatie", "entezopatií – úponových bolestí (napr. tenisový lakeť, golfový lakeť)", "bolestí chrbtice (v rámci komplexnej rehabilitácie)", "poúrazových stavov pohybového systému"]} />
    </div>
  </React.Fragment>,
  }]
};

export const Fyzio7 = {
  about: <p className="co-container__paragraph co-center">Prístroj generuje pulzné elektromagnetické pole. Na rozdiel od klasickej magnetoterapie využíva vysokú indukciu (až 2,5 Tesla), čo umožňuje elektromagnetickú stimuláciu aj hlboko uložených tkanív. <b>Výrazný, rýchly, dlhotrvajúci analgetický účinok.</b> Ako dominantný sa pri tejto terapii javí disperzný účinok, a to ako priamy, tak aj prostredníctvom aktivácie sympatiku na spinálnej etáži, s následným zlepšením tixotropných vlastností tkanív v aplikovanej oblasti.</p>,
  tabs: [{
    tabName: "PÔSOBENIE V TKANIVE",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["znižuje bolesť (analgetický efekt)", "zmenšuje opuch", "zlepšuje rozsah postihnutých kĺbov", "zlepšuje vlastnosti väziva", "zlepšuje vlastnosti synoviálnej tekutiny v kĺboch"]} />
    </div>
  </React.Fragment>,
  }, {
    tabName: "TERAPIA JE URČENÁ K OŠETRENIU",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["kĺbov – artrózy, artropatie", "entezopatií – úponových bolestí (napr. tenisový lakeť, golfový lakeť)", "bolestí chrbtice (v rámci komplexnej rehabilitácie)", "poúrazových stavov pohybového systému"]} />
    </div>
  </React.Fragment>,
  }]
};

export const Fyzio8 = {
  about: <p className="co-container__paragraph co-center">Prístroj generuje pulzné elektromagnetické pole. Na rozdiel od klasickej magnetoterapie využíva vysokú indukciu (až 2,5 Tesla), čo umožňuje elektromagnetickú stimuláciu aj hlboko uložených tkanív. <b>Výrazný, rýchly, dlhotrvajúci analgetický účinok.</b> Ako dominantný sa pri tejto terapii javí disperzný účinok, a to ako priamy, tak aj prostredníctvom aktivácie sympatiku na spinálnej etáži, s následným zlepšením tixotropných vlastností tkanív v aplikovanej oblasti.</p>,
  tabs: [{
    tabName: "PÔSOBENIE V TKANIVE",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["znižuje bolesť (analgetický efekt)", "zmenšuje opuch", "zlepšuje rozsah postihnutých kĺbov", "zlepšuje vlastnosti väziva", "zlepšuje vlastnosti synoviálnej tekutiny v kĺboch"]} />
    </div>
  </React.Fragment>,
  }, {
    tabName: "TERAPIA JE URČENÁ K OŠETRENIU",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["kĺbov – artrózy, artropatie", "entezopatií – úponových bolestí (napr. tenisový lakeť, golfový lakeť)", "bolestí chrbtice (v rámci komplexnej rehabilitácie)", "poúrazových stavov pohybového systému"]} />
    </div>
  </React.Fragment>,
  }]
};

export const Fyzio9 = {
  about: <p className="co-container__paragraph co-center">Prístroj generuje pulzné elektromagnetické pole. Na rozdiel od klasickej magnetoterapie využíva vysokú indukciu (až 2,5 Tesla), čo umožňuje elektromagnetickú stimuláciu aj hlboko uložených tkanív. <b>Výrazný, rýchly, dlhotrvajúci analgetický účinok.</b> Ako dominantný sa pri tejto terapii javí disperzný účinok, a to ako priamy, tak aj prostredníctvom aktivácie sympatiku na spinálnej etáži, s následným zlepšením tixotropných vlastností tkanív v aplikovanej oblasti.</p>,
  tabs: [{
    tabName: "PÔSOBENIE V TKANIVE",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["znižuje bolesť (analgetický efekt)", "zmenšuje opuch", "zlepšuje rozsah postihnutých kĺbov", "zlepšuje vlastnosti väziva", "zlepšuje vlastnosti synoviálnej tekutiny v kĺboch"]} />
    </div>
  </React.Fragment>,
  }, {
    tabName: "TERAPIA JE URČENÁ K OŠETRENIU",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["kĺbov – artrózy, artropatie", "entezopatií – úponových bolestí (napr. tenisový lakeť, golfový lakeť)", "bolestí chrbtice (v rámci komplexnej rehabilitácie)", "poúrazových stavov pohybového systému"]} />
    </div>
  </React.Fragment>,
  }]
};

export const Fyzio10 = {
  about: <p className="co-container__paragraph co-center">Prístroj generuje pulzné elektromagnetické pole. Na rozdiel od klasickej magnetoterapie využíva vysokú indukciu (až 2,5 Tesla), čo umožňuje elektromagnetickú stimuláciu aj hlboko uložených tkanív. <b>Výrazný, rýchly, dlhotrvajúci analgetický účinok.</b> Ako dominantný sa pri tejto terapii javí disperzný účinok, a to ako priamy, tak aj prostredníctvom aktivácie sympatiku na spinálnej etáži, s následným zlepšením tixotropných vlastností tkanív v aplikovanej oblasti.</p>,
  tabs: [{
    tabName: "PÔSOBENIE V TKANIVE",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["znižuje bolesť (analgetický efekt)", "zmenšuje opuch", "zlepšuje rozsah postihnutých kĺbov", "zlepšuje vlastnosti väziva", "zlepšuje vlastnosti synoviálnej tekutiny v kĺboch"]} />
    </div>
  </React.Fragment>,
  }, {
    tabName: "TERAPIA JE URČENÁ K OŠETRENIU",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["kĺbov – artrózy, artropatie", "entezopatií – úponových bolestí (napr. tenisový lakeť, golfový lakeť)", "bolestí chrbtice (v rámci komplexnej rehabilitácie)", "poúrazových stavov pohybového systému"]} />
    </div>
  </React.Fragment>,
  }]
};