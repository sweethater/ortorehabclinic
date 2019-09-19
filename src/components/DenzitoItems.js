import React from "react";

import 'antd/dist/antd.css';
import './Tabs.css';

export const Denzito1 = {
  about: <React.Fragment>
    <div className="co-container__paragraphs co-center">
      <p className="co-container__paragraph co-center">Najčastejšou metódou, ako diagnostikovať - zistiť včasné štádium osteoporózy a ako stanoviť riziko zlomenín, je kostná denzitometria. Včasná diagnostika je významná vzhľadom na to, že osteoporóza sa môže rozvíjať úplne bezpríznakovo po celé desaťročia, pokiaľ nepríde k zlomenine.</p>
    </div>
  </React.Fragment>,
  tabs: [{
    tabName: "PODSTATA VYŠETRENIA",
    tabContent: <React.Fragment>
      <p className="co-container__paragraph co-center">Denzitometria stanoví množstvo kostnej hmoty (denzitu kostí) a je dôležitá na zistenie, či na udržanie kostnej hmoty je nutné užívať lieky, aby nedochádzalo k ďalším stratám kostnej hmoty, taktiež aby sa znížilo riziko zlomenín. U väčšiny prístrojov sa meria stupeň absorpcie RTG lúčov po prechode kostným tkanivom. Hoci pracuje na RTG princípe, netreba sa ho obávať. Ide o bezbolestné vyšetrenie a na rozdiel od bežného RTG snímkovania je dávka ožiarenia zanedbateľná (s výnimkou tehotných žien!). Meria sa hustota kostí v miestach najčastejších zlomenín, t.j. oblasti predlaktia, driekové stavce a horný koniec stehennej kosti.</p>
    </React.Fragment>,
  }]
};