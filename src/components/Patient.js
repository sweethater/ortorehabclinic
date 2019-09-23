import React from "react";
import { Tabs } from 'antd';

import 'antd/dist/antd.css';
import './Tabs.css';
import './Shared.css';
import './Patient.css';

export const PatientTabs = props => {
  const { TabPane } = Tabs;
  return (
    <React.Fragment>
      <div className="co-container__tabs co-center">
      <Tabs defaultActiveKey="patient-1" >
        <TabPane tab="Pokyny pred vyšetrením" key="patient-1">
          <div className="co-container__tab co-center">
            <p className="co-patient-container__paragraph co-center">Vážení pacienti, na základe výmenného lístka od vášho všeobecného lekára ste sa dostavili na ortopedické vyšetrenie na naše pracovisko. Zoznámte sa, prosím, so základnými pokynmi, ktoré sa týkajú vyšetrenia na našom pracovisku.</p>
            <div className="co-container__tab-list co-center">
              <InstructionList items={["Na vyšetrenie si so sebou prineste aktuálnu zdravotnú dokumentáciu, RTG snímky prípadne posledné nahrávky CT alebo MR vyšetrenia na CD disku.",
                "Dôsledne dodržte naše pokyny, ktoré sa týkaj prípravy pred vyšetrením. Ich nedodržiavanie môže znížiť kvalitu vyšetrenia, alebo vás nebudeme môcť vyšetriť.",
                "Akútné prípady obvykle nevyšetrujeme.",
                "Ak máte iné závažné ochorenia, je potrebné dodržať špeciálne opatrenia. Informujte nás o tejto skutočnosti ešte pred naplánovaním vyšetrenia!",
                "Po príchode na naše pracovisko sa ohláste, prosím, na recepcii vo vstupnej časti, odkiaľ vás náš pracovník nasmeruje do prijímacej kancelárie. V prijímacej kancelárii predložíte zdravotnú kartu poistenca a občiansky preukaz na kontrolu a doplnenie údajov uvedených v žiadanke.",
                "V kancelárii dostanete formulár Informovaný súhlas, ktorý si starostlivo prečítajte a podpísaný odovzdajte pracovníkom pred vyšetrením. Na vaše ďalšie otázky ohľadom Informovaného súhlasu vám radi odpovieme ešte pred vyšetrením.",
                "Ak máte potvrdenú iné závažné ochorenie, je vašou povinnosťou nám túto skutočnosť oznámiť bez meškaniav prijímacej kancelárii !"]} />
              <InstructionList items={["Zdržiavajte sa len v určenej čakárni v priestoroch oddelenia. Pre deti sú vyhradené samostatné čakárne. Nevstupujte bez vyzvania pracovníkov oddelenia do iných miestností!",
                "Určite si všimnete, že niektorí pacienti, ktorí prišli až po vás, budú vyšetrení skôr. Zároveň sa totiž vykonáva niekoľko druhov vyšetrení, ktoré majú odlišný postup a odlišnú dobu čakania na samotné vyšetrenie. Pacientov voláme na daný druh vyšetrenia v poradí, v akom sa prihlásili v prijímacej kancelárii. V prípade potreby uprednostňujeme deti a pacientov so závažným zdravotným stavom.",
                "Na vyšetrenie s vami môže prísť ako váš sprievodca ktokoľvek, ale nie je vhodné, aby vás sprevádzali deti a tehotné ženy.",
                "Sprevádzajúca osoba na požiadanie dostane doklad o sprevádzaní príbuzného na vyšetrenie len na základe odporúčania odosielajúceho alebo všeobecného lekára.",
                "Prosím, dodržte naplánovaný čas vyšetrenia a dostavte sa včas na naše pracovisko!",
                "Prosíme vás o trpezlivosť, ak sa čas vášho vyšetrenia posunie, vzhľadom na technické problémy alebo nutnosť doplňujúcich vyšetrení u predchádzajúcich pacientov, čo nie je možné vopred naplánovať ani predvídať."]} />
            </div>
          </div>
        </TabPane>
        {/* <TabPane tab="PRÁVA PACIENTOV" key="patient-2">
          1
        </TabPane> */}
        {/* <TabPane tab="3" key="patient-3">
          1
        </TabPane> */}
      </Tabs>
      </div>
    </React.Fragment>
  );
}

const InstructionList = ({items}) => {
  return (
    <div className="co-patient-container__tab-list-column co-center">
      <ul>
        {items.map((item, i) => <li key={i}>{item.charAt(0).toUpperCase() + item.slice(1)}</li>)}
      </ul>
    </div>
  )
}