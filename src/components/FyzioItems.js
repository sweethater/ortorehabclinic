import React from "react";
import VideoPlayer from 'react-simple-video-player';

// import { AdditionalTreatment } from './Shared';
import { TabList } from './Tabs';

import 'antd/dist/antd.css';
import './Tabs.css';
import './Shared.css';

export const Fyzio = () => {
  return  <React.Fragment>

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
    tabName: "INDIKÁCIE PRE APLIKÁCIU",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["achilodynia", "analgézia", "antiedematózny efekt", "artritída - reumatoidná", "artróza", "bechterevova choroba", "burzitída", "cervikalgie", "distorzia", "elektrogymnastika", "epikondylitída", "facilitácia dýchania", "fraktúra", "gonalgia"]} />
      <TabList items={["hematóm", "hyperemizační a trofotropní efekt", "impingement syndróm", "jazva", "kalcifikácia - extraartikulárna", "lumbosakrální syndróm", "mobilizácia kĺbu", "myalgia", "natiahnutý sval", "nervová regenerácia", "neuralgia", "neuropatia", "osgood-schlatterova choroba", "pätna ostroha"]} />
      <TabList items={["poúrazové hojenie", "predrehabilitačná facilitácia", "redukcia spasticity", "svalová atrofia - prevencia", "svalová regenerácia", "svalová relaxácia", "svalový spazmus", "syndróm karpálneho tunela", "syndróm tarzálního tunela", "tendinopatie", "terapia po mozgovej mŕtvici", "thorakalgia", "tromboembolické prevencia", "hernia disku"]} />
    </div>
  </React.Fragment>,
  }, {
    tabName: "VIDEO",
  }, {
    tabName: "DOPLNKOVÁ LIEČBA",
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
        <TabList items={["Biostimulácia", "Regenerácia", "Protiopuchový účinok", "Protizápalový účinok", "Vysokoúčinný a dlhotrvajúci analgetický účinok"]} />
      </div>
      <div className="co-tabs__paragraphs co-center">
        <p className="co-tabs__paragraph co-left">Vlnová dĺžka laserového svetla okolo hranice 1000 nm v extrémne krátkom pulznom režime dodáva BTL terapii využívajúcej technológiu vysokovýkonného lasera úplne novú terapeutickú vlastnosť - schopnosť vytvárať mechanickú vlnu v biologickom tkanive. Vlnové dĺžky 1064nm a 980nm sú špeciálne navrhnuté tak, aby sa veľmi dobre vstrebávali v štruktúrach na tekutej báze. Potom, čo sa laserové svetlo dostane na pokožku, vytvára v ľudskom tkanive fotomechanickú vlnu o špecifickej vlnovej dĺžke.</p>
      </div>
    </div>
    <p className="co-tabs__paragraph co-center">Mechanická stimulácia voľných nervových zakončení a ďalších receptorov bolesti v podkožnom tkanive blokuje priechod bolesti nervovým systémom a prináša tak okamžitú úľavu. Táto mechanická vlna navyše stimuluje lokálnu mikrocirkuláciu a podporuje lymfatickú drenáž danej patologickej oblasti. Kombináciou biostimulácie a fotomechanickej stimulácie BTL terapie vysokovýkonným laserom sa tak lieči tkanivo a zároveň je poskytovaná výkonná a nenávyková metóda kontroly bolesti. Vysokovýkonný laser umožňuje liečbu širokého spektra indikáciou od akútnych svalových poranení až po hlboko uložené kĺbové degenerácie.</p>
  </React.Fragment>,
  }, {
    tabName: "INDIKÁCIE PRE APLIKÁCIU",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["Achillodynie", "Akné", "Analgézia", "Artróza", "Artróza kĺbov ruky", "Artróza bedrového kĺbu", "Bolestivé rameno", "Burzitída", "Cervikalgia", "Distorzie", "Distorzie členkového kĺbu"]} />
      <TabList items={["Distorzie kolenného kĺbu", "Dorsalgie", "Epicondylitida", "Gonartróza", "Herpes labialis", "Chronická jazva", "Impingement syndróm / frozen shoulder", "Lumbosakrálna bolesť", "Obrna lícneho nervu", "Onychomykóza / fungus", "Osgood-Schlatter syndrome"]} />
      <TabList items={["Otvorená rana", "Patellární tendinopatie", "Plantárna fascitídy / Pätná ostroha", "Subakútna jazva", "Svalová relaxácia / Spúšťacie body", "Svalové poranenie", "Syndróm karpálneho tunela", "Syndróm prednej hrany tíbie", "Syndróm tarzálního tunela", "Tendinopatie", "Tendovaginitida"]} />
    </div>
  </React.Fragment>,
  }, {
    tabName: "VIDEO",
  }, {
    tabName: "DOPLNKOVÁ LIEČBA",
  }]
};

export const Fyzio3 = {
  about: <React.Fragment>
    <p className="co-container__paragraph co-center">TR-Terapie (Selektívna Rádiofrekvenčná Terapia) využíva cielené pôsobenie rádiofrekvenčného prúdu na tkanivo a jeho atermických a termických účinkov. Oblasťami hlavného použitia sú fyzioterapia, športové lekárstvo a rehabilitácia. Hlavnými indikáciami sú svaly (Trigger points, regenerácia svalov po záťaži), posttraumatické stavy (distorzie, kontúzie) a posttraumatické opuchy.</p>
    <p className="co-container__paragraph co-center">Dve rôzne elektródy (kapacitná a rezistívna) selektívnej rádiofrekvenčnej terapie poskytujú presnú a účinnú liečbu na akejkoľvek úrovni ľudského tkaniva. Kapacitná elektróda sa zameriava na liečbu svalových vrstiev. Rezistívna elektróda pôsobí na tkanivo s vyššou impedanciou, ako sú svalové úpony, šľachy a povrch kostí.</p>
  </React.Fragment>,
  tabs: [{
    tabName: "PRINCÍP TR TERAPIE",
    tabContent:  <React.Fragment>
      <div className="co-tabs__paragraphs co-center">
        <p className="co-tabs__paragraph co-center">Koncept TR-Terapie: znásobenie efektov kombinácie prístrojovej a manuálnej liečby, kombinácia manuálnych techník a použitie technológie v jednom okamihu alebo tesne po sebe</p>
        <p className="co-tabs__paragraph co-center">Atermické efekty priechodu rádiofrekvenčného prúdu tkanivom sú: antiedematózny, regeneračný, antiinflamantorný</p>
        <p className="co-tabs__paragraph co-center">Termické efekty priechodu rádiofrekvenčného prúdu tkánivom sú: myorelaxačný, analgetický, regeneračný</p>
      </div>
    </React.Fragment>,
  }, {
    tabName: "INDIKÁCIE PRE APLIKÁCIU",
    tabContent: <React.Fragment>
      <div className="co-container__tab-list co-center">
        <TabList items={["Achillodynie", "Analgézia, artritída - reumatoidná", "Artróza", "Bechterevova choroba", "Cervikalgia", "Cervikobrachiálny syndróm", "Cervikokraniálny syndróm", "Coxalgia", "Coxartróza"]} />
        <TabList items={["Dupuytrenová kontraktúra", "Epikondylitída", "Gonalgia", "Gonartróza", "Impingement syndróm", "Lumbalgie", "Lumbosakrální syndróm", "Metatarsalgia", "Myalgia", "Pätná ostroha"]} />
        <TabList items={["Sakralgia", "Spúšťacie body - hĺbkové / povrchové", "Svalová regenerácia", "Svalová relaxácia", "Syndróm karpálneho tunela", "Syndróm zmrznutého ramena", "Tendinitída", "Thorakalgie", "Trofotropní efekt", "Vertebrogénny algický"]} />
      </div>
    </React.Fragment>,
  }, {
    tabName: "VIDEO",
  }, {
    tabName: "DOPLNKOVÁ LIEČBA",
  }]
};

export const Fyzio4 = {
  about: <p className="co-container__paragraph co-center">Pri mäkkých technikách sa pracuje s mäkkými štruktúrami ako sú: koža, podkožie, fascia. Sú to štruktúry, ktoré ovplyvňujú vznik a priebeh pohybu. Pružnosť a pohyblivosť týchto mäkkých tkanív výrazne ovplyvňuje priebeh a programovanie pohybu. Každá porucha mäkkých tkanív vedie k zmene pohybu, pričom väčšinou sa jedná o obmedzenie rozsahu, a to v zmysle kvantity alebo kvality. Rovnako môže byť zmenená aj koordinácia pohybu.</p>,
  tabs: []
};

export const Fyzio5 = {
  about: <React.Fragment>
    <p className="co-container__paragraph co-center">SM Systém predstavuje systematické cvičenia zamerané na pohybový aparát človeka; predovšetkým chrbticu. Spája rehabilitačnú liečbu s prevenciou, regeneráciou a kondičným tréningom v jednotnom metodickom postupe. Autorom je bývalý športovec a renomovaný český lekár MUDr. Richard Smíšek. SM Systém vychádza z dôkladného anatomického poznania a klinických štúdií.</p>
    <p className="co-container__paragraph co-center">SM Systém obsahuje 11 základných cvikov, ktoré sa ďalej rozširujú o rôzne modifikácie – špeciálne cvičenia pre tehotné ženy, zostava pre tenisových hráčov, rehabilitáciu pri skolióze.</p>
  </React.Fragment>,
  tabs: [{
    tabName: "PRINCÍP SM Systému",
    tabContent:  <React.Fragment>
      <div className="co-tabs__paragraphs co-center">
        <p className="co-tabs__paragraph co-center">SM Systém je určený pre každého jedinca – deti od 5 rokov, dospelí i starší ľudia, ktorí majú záujem o zdravý telesný vývoj, prevenciu proti vzniku bolestí chrbta, prípadne trpia problémami s chrbticou.</p>
        <p className="co-tabs__paragraph co-center">Cvičenia sú vhodné aj počas tehotenstva v snahe obmedziť riziká pri pôrode. Taktiež sú cvičebné metódy SM Systému vhodné pre tých, ktorým nepomohli štandardné fyzioterapie a ich problémy pretrvávajú. SM Systém s obľubou využívajú vrcholoví športovci počas kondičnej prípravy a rehabilitácie.</p>
      </div>
    </React.Fragment>,
  }, {
    tabName: "INDIKÁCIE PRE APLIKÁCIU",
    tabContent: <React.Fragment>
      <div className="co-container__tab-list co-center">
        <TabList items={["Problémy s chrbticou častokrát prameniace zo životného štýlu, zamestnania a návykov", "Poruchy držania tela – deti počas vývoja, zranenia, nesprávne sedenie", "Hernia disku, skolióza, spinálna stenóza - vážnejšie diagnózy", "Stuhnuté svaly krku – podcečovaný stav, ktorý môže priniesť ďalšie problémy"]} />
        <TabList items={["Extrémne namáhané svalstvo – manuálne profesie, dvíhanie ťažších predmetov, športovci", "Ochabovanie svalstva chrbta – typické pre kancelárske profesie a sedavé zamestnania", "Bolesť v oblasti lopatiek – častá bolesť hlavne u ľudí v strednom veku"]} />
      </div>
    </React.Fragment>,
  }, {
    tabName: "VIDEO",
  }, {
    tabName: "DOPLNKOVÁ LIEČBA",
  }]
};

export const Fyzio6 = {
  about: <React.Fragment>
    <div className="co-container__paragraphs co-center">
      <p className="co-container__paragraph co-center">TRX predstavuje všestranné cvičenie. Na prvý pohľad si možno nebudete vedieť cvičenie na TRX príliš dobre predstaviť. Môže sa Vám zdať, že cvičenie na ňom je ľahší tréning, pri ktorom sa len pomaly ponaťahujete a trochu si precvičíte svaly. Ale opak je pravdou a prvé zdanie môže klamať.</p>
      <p className="co-container__paragraph co-center">Princípom tréningu je zavesenie jednej časti tela do popruhov, pričom druhá časť zostáva v kontakte s podložkou. Intenzitu cvičenia si každý môže regulovať sám, a to iba zmenou polohy tela oproti závesnému bodu.</p>
      <p className="co-container__paragraph co-center">Je až neuveriteľné, ako posunutie tela o pár centimetrov zmení intenzitu vykonávaného prvku. Čím ste nižšie pod závesným bodom, tým je cvik náročnejší a naopak. Počas cvičenia zapájate aj svaly, o ktorých často ani neviete, že ich máte.</p>
      <p className="co-container__paragraph co-center">Vďaka tomu, že si môžete regulovať intenzitu záťaže (percento telesnej hmotnosti), s ktorou cvičíte, je TRX vhodný pre všetky úrovne fyzickej zdatnosti. Od začiatočníkov až po elitných športovcov. V súčasnej dobe je tento cvičebný systém plne využívaný v športových centrách aj pri outdoorových aktivitách.</p>
    </div>
  </React.Fragment>,
  tabs: []
};


export const Fyzio7 = {
  about: <React.Fragment>
    <div className="co-container__paragraphs co-center">
      <p className="co-container__paragraph co-center">Kinesiotaping je metóda využívaná vo fyzioterapii na ovplyvnenie muskuloskeletálneho systému, lymfatického systému. </p>
      <p className="co-container__paragraph co-center">Používa elastické pásky – kinesiotape, vďaka ktorým sa zvýši intresticiálny priestor, čo má za následok zvýšené prúdenie lymfy a krvi, zníži sa tlak na cievy a tým je urýchlený proces hojenia. Nalepený „tape“ súčasne stimuluje špeciálne kožné receptory, následkom čoho sa zvýši aktivita v danom tkanive, čo proces hojenia ešte umocňuje. Ďalej sa využíva na spevňovanie alebo uvedenie kĺbov do správnej polohy. Výhodou tejto techniky je to, že neobmedzuje sval v pohybe.</p>
      <p className="co-container__paragraph co-center">Podľa toho, aký je terapeutický zámer, sa využíva buď na facilitáciu – teda podporu svalovej činnosti, alebo inhibíciu – zníženie svalového napätia.</p>
      <p className="co-container__paragraph co-center">Slúži tiež na relaxáciu preťažených, natiahnutých alebo natrhnutých svalov. Umožňuje redukciu bolesti, opuchov a rýchlejšie vstrebanie hematómov.</p>
      <p className="co-container__paragraph co-center">Jeho vynikajúce účinky využívajú hlavne športovci po úrazoch, alebo na zlepšenie výkonu, na stabilizáciu kĺbov počas výkonu, no je obľúbený aj u bežnej populácie. Ocenia ho ľudia po úraze alebo po chirurgických zákrokoch.</p>
    </div>
  </React.Fragment>,
  tabs: []
};

export const Fyzio8 = {
  about: <p className="co-container__paragraph co-center">Jedná sa o cielené cvičenia a liečenie pohybom za účelom zväčšenia svalovej sily, rozsahu pohybu, zlepšenia koordinácie a celkovej kondície.</p>,
  tabs: [{
    tabName: "DRUHY CVIČENÍ",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["Post izometrická relaxácia - terapia, ktorá šetrne uvoľňuje a zväčšuje rozsah pohybu v danom kĺbe spolu s technikami mäkkých tkanív patrí medzi preventívne „cvičenia“ zamerané na svalový systém",
                       "Spinálne cvičenia - rotačné cvičenia cielené na jednotlivé segmenty chrbtice",
                       "Skoliotický program - cielené cvičenie korigujúce patologické zakrivenie chrbtice (chybné držanie tela)",
                       "Individuálna liečebná telesná výchova – pasívne alebo aktívne asistované a aktívne cvičenia slúžiace k obnove pohybu osôb postihnutých nepriaznivou udalosťou (traumou, úrazom, resp. degeneratívnymi zmenami - artrózy chronického ako aj akútneho charakteru)"]} />
    </div>
  </React.Fragment>,
  }]
};

export const Fyzio9 = {
  about: <React.Fragment>
    <div className="co-container__paragraphs co-center">
      <p className="co-container__paragraph co-center">Skupinové SM cvičenie - max 3 osoby. SM Systém – Preventívne rehabilitačno-kondičné cvičenie, ktorým sa aktivujú svalové reťazce, vytvára sa svalový korzet a trakčná sila, ktorá vzpriamuje chrbticu. Pri cvičení sa používa elastické lano na vytvorenie odporu pre lepšie zefektívnenie pohybu.</p>
      <p className="co-container__paragraph co-center">Výsledkom sú posilnené a uvoľnené svaly, zlepšená stabilizácia a mobilizácia chrbtice, koordinácia a kvalita chôdze. Cieľom cvičenia je regenerovať medzistavcové platničky celej chrbtice a predchádzať, či zmierňovať diagnózu skoliózy.</p>
      <p className="co-container__paragraph co-center"><b>Cvičenie je vhodné aj pre seniorov, na prevenciu pádov a pre kondičných športovcov na zvýšenie výkonnosti. Cvičenie trvá 45 – 50 minút</b>.</p>
    </div>
  </React.Fragment>,
  tabs: []
};

export const Fyzio10 = {
  about: <React.Fragment>
    <p className="co-container__paragraph co-center">Motodlaha je vhodná pre liečbu väčšiny poranení, postoperatívnych stavov a ochorení kĺbov.</p>
    <p className="co-container__paragraph co-center"><b>Profesionálne prístroje pre kontinuálnu pasívnu pohybovú liečbu (rameno, koleno)</b></p>
  </React.Fragment>,
  tabs: [{
    tabName: "VÝHODY LIEČBY",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["Zväčšuje rozsah pohybu kĺbov",
                       "Skracuje dĺžku rehabilitácie",
                       "Zlepšuje látkovú výmenu v kĺbe a zamedzí ztuhnutia kĺbov",
                       "Zlepší vstrebávanie hematómu",
                       "Zníži bolestivosť ztuhnutých kĺbov",
                       "Liečba je bez vedľajších účinkov a znižuje spotrebu analgetík"]} />
    </div>
  </React.Fragment>,
  }, {
    tabName: "INDIKÁCIE PRE APLIKÁCIU",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["Akrotomia a artroskopia v kombinácii so synovektomiou, artrolýzou alebo inými intraartikulárnymi opatreniami",
                       "Artroplastiky vrátane implantácie endoprotézy",
                       "Operatívne zaistené fraktúry, operatívne výmeny svalov",
                       "Zásahy na mäkkých tkanivách blízko kĺbu",
                       "Nekonštruktívna operácia so stabilnými osteosyntéziami",
                       "Korekčná osteotomia, resekcia tumoru blízko kĺbu",
                       "Artrolýzy, prechodené zápaly, distorzia a zhmoždeniny kĺbov"]} />
    </div>
  </React.Fragment>,
  }]
};