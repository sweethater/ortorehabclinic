import React from "react";

import { TabList } from './Tabs';

import 'antd/dist/antd.css';
import './Tabs.css';
import './Shared.css';

export const Orthopedic1 = {
  about: <p className="co-container__paragraph co-center">Liečba autolognými proteínmi je nová terapia určená na liečbu bolesti pri osteoartróze kolena, ktorá spomaľuje progresiu osteoartrózy a deštrukciu chrupavky v kolene.</p>,
  tabs: [{
    tabName: "ČO JE Liečba autolognými proteínmi",
    tabContent: <React.Fragment>
      <div className="co-tabs__paragraphs--flex co-center">
        <p className="co-tabs__paragraph co-left">Liečba autolognými proteínmi spracováva vašu vlastnú krv a poskytuje jedinečný výstupný produkt, ktorý sa aplikuje priamo do kolenného kĺbu a dodáva mu potrebné protizápalové proteíny. V laboratórnych testoch mali tieto proteíny potvrdené excelentné výsledky v spomalení degradácie chrupavky kolena a pri liečbe bolesti.?</p>
      </div>
    </React.Fragment>,
  }, {
    tabName: "ČO SPÔSOBUJE ZÁPAL A BOLESŤ",
    tabContent: <React.Fragment>
      <div className="co-tabs__paragraphs--flex co-center">
        <p className="co-tabs__paragraph co-left">
          V osteoartritickom kolene prevyšuje množstvo zápalových cytokínov IL-1 a TNF (tzv. „zlé“ proteíny) nad množstvom protizápalových cytokínov IL-1ra, sIL-1R, sTNF-RI a sTNF-RII (tzv. „dobré“ proteíny), čo spôsobuje <b>nerovnováhu</b> vedúcu k bolesti kolena a degenerácii chrupavky.
          <br></br><br></br>
          Kým sa obnovuje rovnováha proteínov v kolene (2-6 týždňov), aplikáciou <b>autologných proteínov</b> zavádzame do kolena aj (stavebné) rastové faktory (IGF-1 a TGF-1). Preto liečba autolognými proteínmi vytvára novú terapiu, ktorá zmierňuje bolesť v kolennom kĺbe, zlepšuje funkciu kĺbov a spomaľuje degradáciu chrupavky. Táto terapia sa poskytuje v lekárskej ambulancii bez chirurgického zákroku.
        </p>
        <p className="co-tabs__paragraph co-left">          
          <b>Pomocou liečby autolognými proteínmi</b> aplikujeme vysoké hladiny „dobrých“ proteínov (IL-1ra, sIL-1R, sTNF-RI a sTNF-Rll), ktoré slúžia na blokovanie zvýšeného množstva zápalových cytokínov IL-1 a TNF a tým nastavíme rovnováhu v kĺbe. Laboratórne štúdie ako aj štúdie na ľuďoch ukázali, že liečba autolognými proteínmi má na rozdiel od tradičných terapií signifi kantne lepšie výsledky na zníženie bolesti a spomalenie degenerácie chrupavky.
        </p>
      </div>
    </React.Fragment>,
  }, {
    tabName: "ČASTO KLADENÉ OTÁZKY",
    tabContent: <React.Fragment>
      <div className="co-container__tab-list co-center">
        <TabList items={[{
          question: "Čo je liečba autolognými proteínmi?",
          answer: "Liečba autolognými proteínmi je autológna terapia (z vlastného tela), ktorá je určená na liečbu bolesti kĺbov spojených s osteoartrózou. Liečba autolognými proteínmi má preukázateľné ochranné vlastnosti chrupavky.",
        }, {
          question: "Ako funguje iečba autolognými proteínmi?",
          answer: "Liečba autolognými proteínmi sa aplikuje priamo do kolenného kĺbu. Pozitívne výsledky sú možné vďaka prítomnosti vysokej koncentrácie protizápalových proteínov. Tieto „dobré“ proteíny pomáhajú blokovať zápal v kĺbe, čim znižujú bolesť a spomaľujú degradáciu chrupavky pri osteoartóze.",
        }, {
          question: "Z čoho sa autologne proteíny vyrába?",
          answer: "Autologne proteiny spracováva vlastnú krv pacienta v ordinácii lekára. Vďaka špeciálemu príslušenstvu a jednorázovým sterilným komponentom sa centrifugáciou separujú biele krvinky, krvné doštičky a plazmatické bielkoviny do malého objemu plazmy.",
        }, {
          question: "Ako sa liečba autolognými proteínmi podáva?",
          answer: "Finálnou centrifugáciou sa separuje cca 2-3 ml plazmatickej zlúčeniny tvorenej z vysokej dávky protizápalových proteínov. Príprava autologných proteínov trvá od odobratia krvného materiálu až po fi nálnu aplikáciu do kĺbu cca 60 min.",
        }, {
          question: "Existujú vedľajšie účinky?",
          answer: "Môžu sa vyskytnúť vedľajšie účinky ako napríklad podliatina, lokálna bolesť alebo opuch, zväčša súvisiace s odberom krvi, aplikáciou do kolenného púzdra, vyšetrením MRI alebo röntgenovým vyšetrením.",
        }]} />
        <TabList items={[{
          question: "Vylieči liečba autolognými proteínmi moju osteoartrózu?",
          answer: "V dnešnej dobe neexistuje žiadny liek na OA. Avšak úspešná liečba autolognými proteínmi znižuje alebo zmierňuje bolesť, spomaľuje degradáciu chrupavky, môže zvýšiť celkovú funkčnosť kĺbu a Vaše pohodlie.",
        }, {
          question: "Kedy začne liečba fungovať?",
          answer: "Úľavu od bolesti možno očakávať po jednom až dvoch týždňoch.",
        }, {
          question: "Budem môcť byť aktívny ako obvykle počas liečby?",
          answer: "Odporúča sa minimalizovať svoju aktivitu počas 14 dní.",
        }, {
          question: "Ako dlho môžem očakávať, že výhody budú trvať?",
          answer: "Na základe predklinických a skorých klinických výsledkov môžu pacienti očakávať prínosy až do 24 mesiacov a dlhšie.",
        }, {
          question: "Koľko injekcií pri liečba autolognými proteínmi sa vyžaduje?",
          answer: "Klinické štúdie preukázali účinnosť jednej injekcie po dobu dlhšiu ako 24 mesiacov.",
        }]} />
      </div>
    </React.Fragment>,
  }]
};

export const Orthopedic2 = {
  about: <React.Fragment>
    <p className="co-container__paragraph co-center"><b>Vyšetrenie je plne hradené zdravotnými poisťovňami</b></p>
    <p className="co-container__paragraph co-center">Ultrazvukové vyšetrenie bedrových kĺbov je jedným z prvých vyšetrení dieťaťa. Ide o preventívne screeningové vyšetrenie zamerané na skorú diagnostiku dysplázie bedrových kĺbov.</p>
    </React.Fragment>,
  tabs: [{
    tabName: "DETSKÝ ULTRAZVUK",
    tabContent: <React.Fragment>
      <div className="co-container__tab-list co-center">
        <TabList items={["Vyšetrenie bedrových kĺbov na našej klinike", "Certifikovaný ortopéd", "V príjemnom prostredí", "Bez čakania a bez zbytočných stresov"]} />
        <div className="co-tabs__paragraphs co-center">
          <p className="co-tabs__paragraph co-left">Ultrazvukové vyšetrenie bedrových kĺbov je jedným z prvých vyšetrení dieťaťa. Ide o preventívne screeningové vyšetrenie zamerané na skorú diagnostiku dysplázie bedrových kĺbov. Dysplázia bedrového kĺbu je vývojová porucha, pri ktorej dochádza ku chybnému vývoju jamky a hlavice v bedrovom kĺbe.</p>
          <p className="co-tabs__paragraph co-left">Prvé vyšetrenie robia deťom už v pôrodnici. Druhé vyšetrenie musí novorodenec absolvovať najneskôr v 4. týždni, respektíve podľa odporúčania ortopéda aj v 3. mesiaci. V prípade, ak je všetko v poriadku, dieťa nie je potrebné ďalej sledovať a vyšetrenie opakovať.</p>
        </div>
      </div>
    </React.Fragment>,
  }, {
    tabName: "ČO VÁS U ORTOPÉDA ČAKÁ?",
    tabContent: <React.Fragment>
        <div className="co-tabs__paragraphs--flex co-center">
          <p className="co-tabs__paragraph co-left">Najprv zistíme Vašu anamnézu, dieťatko vyšetríme, zistíme, či má v poriadku hybnosť kĺbov, urobíme mu ultrazvukové vyšetrenie a podľa výsledkov vám odporučíme ďalší vhodný postup. Napríklad špeciálne balenie bábätka. Nemusíte mať žiadne obavy, ide o neinvazívne, nebolestivé ultrazvukové vyšetrenie, ktoré trvá približne 10 minút.</p>
          <p className="co-tabs__paragraph co-left">Žiadnym spôsobom nepoškodzuje detský organizmus a pomôže odhaliť skryté vývojové vady bedrových kĺbov. Pred vyšetrením bábätka nie je nutná žiadna príprava.</p>
        </div>
    </React.Fragment>,
  }]
};

export const Orthopedic3 = {
  about: <p className="co-container__paragraph co-center">Pacienti vyhľadajú pomoc ortopéda najčastejšie pri dole uvedených zdravotných problémoch."</p>,
  tabs: [{
    tabName: "ZDRAVOTNÉ PROBLÉMY",
    tabContent: <React.Fragment>
      <div className="co-container__tab-list co-center">
        <TabList items={["Bolesti klbov (ramenný, kolenný, lakťový, členkový, bedrový)", "Chybné držanie tela", "Bolesti chrbta", "Bolesti nôh, chodidiel"]} />
        <TabList items={["Bolesti v rôznych častiach končatín", "Problémoch s plochými nohami", "Bolesti hlavy súvisiacich s pohybovou sústavou", "Ďalšie poruchy pohybového aparátu"]} />
      </div>
    </React.Fragment>,
  }]
};

export const Orthopedic4 = {
  about: <p className="co-container__paragraph co-center">Jedná sa o bezpečnú neoperačnú metódu, ktorá využíva bunky z vlastnej krvi.. Liečba vlastnou plazmou je efektívna biologická metóda využitia koncentrovaných rastových faktorov získaných úpravou krvi pacienta pre terapeutické využitie úrazov, bolestivých stavov pohybového aparátu (svalov, väzov, šliach...) a kĺbnej artrózy.</p>,
  tabs: [{
    tabName: "PODSTATA TERAPIE",
    tabContent: <React.Fragment>
      <div className="co-tabs__paragraphs--flex co-center">
        <p className="co-tabs__paragraph co-left">Liečba vlastnou krvou je čoraz populárnejším ošetrením pleti, ktoré spomaľuje účinky starnutia prirodzenou formou. Jej jedinečnou výhodou je, že je bezpečná, bez komplikácií a je “BIO”, je to Vaša vlastná krv.</p>
        <p className="co-tabs__paragraph co-left">Podstatou tejto bioterapie je, že získame z krvi pacienta plazmu obohatenú o trombocyty a vysoké množstvo rôznych rastových faktorov (PDGF, AB a BB, IGF, EGF, VEGF, TGF Beta 1 a Beta 2) a iné hojace faktory. Tieto rastové faktory sú zodpovedné za regeneračné a reparačné procesy vo viacerých tkanivách vrátane kostí, šliach, chrupavky a kože. Napomáhajú procesu hojenia pri akútnych úrazoch, alebo pri prechode do chronického štádia. Tento výťažok z krvi sa aplikuje pomocou injekcie do poraneného miesta resp. kĺbu. Rastové faktory aktivujú kaskádu protizápalových, regeneračných a reparačných procesov v patologicky zmenených tkanivách.</p>
      </div>
    </React.Fragment>,
  }, {
    tabName: "APLIKÁCIA",
    tabContent: <React.Fragment>
      <div className="co-tabs__paragraphs--flex co-center">
        <p className="co-tabs__paragraph co-left">Artróza (čiže osteoartróza) kĺbov - koleno, rameno, členok, lakeť, bedro, malé kĺby cca. 5 aplikácií, vhodné u 1., 2. a časti 3. stupňa artrózy podľa RTG, kedy je ešte v kĺbe prítomná chrupavka.</p>
        <p className="co-tabs__paragraph co-left">Existujú pozitívne skúsenosti s aplikáciou krvnej plazmy do kĺbov s artrózou 4. stupňa, kedy môže zmierniť bolesti. Táto analgetická indikácia môže byť riešením pre pacientov trpiacich bolesťami, ktorí nemôžu z iných dôvodov podstúpiť operačnú náhradu kĺbu alebo nemôžu trvalo užívať protizápalové lieky s množstvom vedľajších účinkov. Každého pacienta musí dôkladne vyšetriť ortopéd a navrhnúť riešenie. Definitívne rozhodnutie je vždy na pacientovi.</p>
      </div>
    </React.Fragment>,
  }, {
    tabName: "INDIKÁCIE PRE APLIKÁCIU",
    tabContent: <React.Fragment>
    <div className="co-container__tab-list co-center">
      <TabList items={["Postihnutie chrupavky 1. až 3. stupňa - chondromalacie, chondropatie",
                       "Ložiskové defekty kĺbovej chrupavky - poúrazové stavy, osteochondrosis dissecans",
                       "Akútne a subakútne poškodenie meniskov kolenného kĺbu",
                       "Akútne a subakútne poškodenia kĺbových väzov (rameno, koleno, členok, atď.)",
                       "Podvrtnutie kĺbov a natiahnutie väzov - najmä distorzie kolena a pätyartróza",
                       "bechterevova choroba",
                       "Po atroskopickej sutúre menisku",
                       "Po rekonštrukcii predného skríženého väzu kolena"]} />
      <TabList items={["Po operačnej stabilizácii ramena či sutúre rotátorov ramena",
                       "Ochorenie úponov šliach a väzov - tzv. Entezopatie (ostroha pätovej kosti, natiahnuté triesla)",
                       "Tenisový a golfový lakeť – entezopatie",
                       "Postihnutie Achillovej šľachy - entezopatie (úponové bolesti) či tendinóza (chronický zápal a hmatateľné zdurenie)",
                       "Akútne a chronické zápaly šliach a väzov",
                       "Skokanské koleno, poškodenie AC kĺbu",
                       "Podpora hojenia chrupaviek, väzov, svalov, šliach a kostí po úrazoch, operáciách a plastikách",
                       "kalcifikáci"]} />
    </div>
  </React.Fragment>,
  }, {
    tabName: "POSTUP LIEČBY",
    tabContent: <React.Fragment>
      <div className="co-tabs__paragraphs--flex co-center">
        <p className="co-tabs__paragraph co-left">
          Metóda krvnej plazmy je založená na odbere vlastnej krvi. Čerstvé sérum získané z tejto krvi je po špeciálnej úprave injekčne aplikované priamo do postihnutého miesta. Ide o bežný ambulantný zákrok, u ktorého nie sú používané anestetiká.<br></br>
          Pri všetkých uvedených indikáciách počet potrebných aplikáciu krvnej plazmy určí ortopéd.
        </p>
        <p className="co-tabs__paragraph co-left">Aplikácia vlastnej krvnej plazmy otvorila novú etapu a významne rozšírila možnosti boja s artrózou, avšak budúcnosť liečby artrózy naďalej spočíva v komplexnosti. Racionálna kombinácia dostupných liečebných postupov, liečby kmeňovými bunkami, krvnou plazmou, rehabilitácie, balneoterapie a režimových opatrení (redukcie váhy, pohyb, zdravý životný štýl) je štandardom terapie. Až pri vyčerpaní týchto liečebných opatrení zostáva možnosť náhrady kĺbu umelým. S rozvojom biochirurgické medicíny a nových technológií liečby artrózy bude týchto operácií iste ubúdať.</p>
      </div>
    </React.Fragment>,
  }, {
    tabName: "VIDEO",
  }]
};

export const Orthopedic5 = {
  about: <p className="co-container__paragraph co-center">Moderná, vysoko účinná a šetrná liečebná metóda využívajúca akustické vlny s extrémne vysokým energetickým maximom, ako tie, ktoré sa vyskytujú v atmosfére po explozívnej udalosti, ako úder blesku alebo aerodynamický tras. Pri jej aplikácii dochádza ku zmierneniu bolesti, zvýšeniu a urýchleniu tkanivového metabolizmu a zvýšeniu mikrocirkulácie v ošetrenom tkanive."</p>,
  tabs: [{
    tabName: "AKO VÁM MÔŽU POMÔCŤ?",
    tabContent: <React.Fragment>
      <div className="co-tabs__paragraphs--flex co-center">
        <p className="co-tabs__paragraph co-left">Rázová vlna je akustickou vlnou prenášajucou vysokú energiu do bolestivých miest a do väzivového a myoskeletálneho tkaniva so subakutnymi, subchronickými a chronickými stavmi. Táto energia spúšťa liečebné, regeneračné a rekonstrukčné procesy v šlachách a v mäkkom tkanive.</p>
      </div>
    </React.Fragment>,
  }, {
    tabName: "OBLASŤ POUŽITIA LIEČBY",
    tabContent: <React.Fragment>
      <div className="co-container__tab-list co-center">
        <TabList items={["Rehabilitácia", "Športová medicína", "Ortopédia", "Fyzioterapia"]} />
      </div>
    </React.Fragment>,
  }, {
    tabName: "NAJČASTEJŠIE INDIKÁCIE",
    tabContent: <React.Fragment>
      <div className="co-container__tab-list co-center">
        <div className="co-container__tab-list-column co-center">
          <ul>
            {["Liečba tenisového lakťa a jeho oblastí", "Bolesti v ramenného kĺbu a svalových spojení ramena s obmedzenou pohyblivosťou", "Rehabilitácia zápalu Achillovej šľachy", "Bolesť a tlak na tibiálnej kosti", "Šľachy a svalové spojenia v hornej časti dolných končatín, hlavne triesla", "Bolesti pri nadmernej záťaži kolena", "Akútne aj chronické zápaly päty", "Zápaly a hromadenie vápenatých zrazenín", "Bolesti z preťaženia (tenisový lakeť, ostrohy na pätách)", ].map((item,i) => <li key={`indikacia-${i}`}>{item}</li>)}
          </ul>
        </div>
      </div>
    </React.Fragment>,
  }]
};

export const Orthopedic6 = {
  about: <p className="co-container__paragraph co-center">V posledných rokoch zaznamenávajú lasery v zdravotníctve obrovský rozmach najmä vďaka pokroku v oblasti modernej technológie vo výrobe laserových diód. Cenovo sú dnes už dostupné do každej ambulancie. V prípade záujmu sa kontaktujte s našimi odborníkmi. Poskytneme Vám poradenstvo i skúsenosti s používaním laserov v najrôznejších medicínskych aplikáciách.</p>,
  tabs: [{
    tabName: "LIEČBA NÍZKOVÝKONOVÝM LASEROM – SOFTLASEROM",
    tabContent: <React.Fragment>
      <p className="co-container__paragraph co-center">pre jeho analgetický, antiflogistický a biostimulačný efekt určila nové možnosti liečby prakticky vo všetkých oblastiach medicíny:</p>
      <div className="co-container__tab-list co-center">
        <TabList items={["chirurgia – distenzie, distorzie, per sekundam hojace sa rany, ulcera cruris, tendovaginitidy atď.",
          "ortopédia – entezopatie, osteo a spondylartrózy atď.",
          "reumatológia – progresívna polyartritída",
          "rehabilitácia a športová medicína: doliečenia pourazových stavov atď.",
          "gynekológia – kolpitídy, adnexitídy atď.",
          "urológia – Štúdia: Benígna Hyperplázia Prostaty (.pdf), epidimitídy atď",
          "proktológia – hemoroidy, fisury, fistuly atď."]} />
        <TabList items={["dermatológia – HSV, zoster, keloidné jazvy, ekzémy atď.",
          "neurológia – neuralgia, trigeminu, spastické parézy atď.",
          "ORL – zápalové ochorenia vonkajšieho ucha, nosohltana, tvárových dutín atď.",
          "stomatológia – gingivitídy, afta atď.",
          "interná medicína",
          "akupunktúra"]} />
        </div>
    </React.Fragment>,
  }]
};

export const Orthopedic7 = {
  tabs: [{
    tabName: "BENEFITY TERAPIE",
    tabContent: <React.Fragment>
    <div className="co-tabs__paragraphs--flex co-center">
      <p className="co-tabs__paragraph co-left">Zásadným benefitom daného terapeutického prístupu je liečba bolesti bez rizika liekových interakcií (kolagén nezasahuje do účinnosti ostatných liekov, napr. warfarínu), bez významných nežiaducich účinkov (kolagén je telu vlastná látka dodávaná v injekčnej mikrosuplementačnej dávke), bez alergických reakcií (nezaznamenali sme žiadne alergické reakcie). Pre konkrétnu oblasť protibolestivého použitia sú určené konkrétne kolagénové injekcie (napr. gonartróza MD-Knee, coxartróza MD-Hip, syndróm zmrznutého ramena MD-Shoulder, lumbalgia MD-Lumbar, svalová bolesť MD-Muscle, neuralgická/neuropatická bolesť MD-Neural).</p>
    </div>
  </React.Fragment>,
  }],
  about: <p className="co-container__paragraph co-center">"Kolagén podaný injekčne zlepšuje kĺbovú mobilitu, ale napomáha aj uvoľneniu a fyziologickej funkcii svalstva v danej oblasti. Odstraňuje tak príčinu bolesti a prispieva k jej odstráneniu. Kolagén je základnou stavebnou jednotkou spojivového tkaniva kĺbových systémov, a preto jeho mikrosuplementácia zlepšuje profil kolagénového vlákna. Kolagén tak reprezentuje štrukturálny účinok, t.j. chráni a posilňuje kĺbové puzdro, väzy, šľachy, a preto spevňuje ochabnuté a hypermobilné kĺbové systémy.</p>
};

export const Orthopedic8 = {
  tabs: [],
  about: <p className="co-container__paragraph co-center">Ortopedické konzultácie sú určené pre konzultáciu so špecializovaným lekárom v odbore ortopédia v súvislosti s konkrétnou, Vami trpiacou, ortopedickou diagnózou. Konzultácie sú určené aj za účelom posudku pre zdravotné poisťovne.</p>,
};