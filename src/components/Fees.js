import React from "react";
import { NavLink } from 'react-router-dom';
import '@brainhubeu/react-carousel/lib/style.css';
import { Fade } from 'react-reveal';
import { Tabs } from 'antd';

import 'antd/dist/antd.css';
import './Home.css';
import './Shared.css';
import './Fees.css';

export const Fees = props => {
  const section = 'fees';
  const { TabPane } = Tabs;
  return (
    <Fade>
      <div className="co-fees-container co-content-container">
        <p className="co-container__header co-center">CENNÍK</p>
        <div className="co-container__tabs co-center">
          <Tabs defaultActiveKey={`${section}-1`} >
            <TabPane tab="Cenník fyzioterapia" key={`${section}-1`}>
              <FeesFyzio></FeesFyzio>
            </TabPane>
            <TabPane tab="Cenník ortopédia" key={`${section}-2`}>
              <FeesOrtopedic></FeesOrtopedic>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </Fade>
  );
}

export const Fees2 = props => {
  const section = 'fees';
  return (
    <Fade>
      <div className="co-fees-container co-content-container">
        <p className="co-container__header co-center">CENNÍK</p>
        <div className="co-container__paragraphs co-center">
          <p className="co-container__paragraph-narrow co-center"><b>Cenník fyzioterapia</b></p>
          
          <NavLink className="nav" to={`/${section}/fyzio`}><div className="co-fees-container__button co-center">Cenník fyzioterapia</div></NavLink>
        </div>
        <div className="co-container__paragraphs co-center">
          <p className="co-container__paragraph-narrow co-center"><b>Cenník ortopédia</b></p>

          <NavLink className="nav" to={`/${section}/ortopedic`}><div className="co-fees-container__button co-center">Cenník ortopédia</div></NavLink>
        </div>
      </div>
    </Fade>
  );
}

const TableItem = ({itemName, itemPrice}) => {
  return (
    <tr>
      <td className="co-fees_table--item-name">{itemName}</td>
      <td className="co-fees_table--item-price">{itemPrice}</td>
    </tr>
  );
}

export const FeesFyzio = props => {
  const section = 'fees'
  return (
    <Fade>
      <div className="co-fees-container co-content-container">
        <div className="co-fees-container__table co-center">
          <table id="fees_table">
            <tbody>
              <TableItem itemName="Úvodné a základné diagnostické vyšetrenie v trvaní 10 min." itemPrice="zadarmo"></TableItem>
              <TableItem itemName="V trvaní 30 min." itemPrice="10,- Eur"></TableItem>
              <TableItem itemName="V trvaní 55 min." itemPrice="20,- Eur"></TableItem>
              <TableItem itemName="1 x TR THERAPY" itemPrice="15,- Eur"></TableItem>
              <TableItem itemName="5 x TR THERAPY + 1 x zadarmo" itemPrice="75,- Eur"></TableItem>
              <TableItem itemName="5 x Individuálna liečebná telesná výchova + TR THERAPY + Laser 12 Watt + 1 x zadarmo" itemPrice="100,- Eur"></TableItem>
              <TableItem itemName="10 x Individuálna liečebná telesná výchova + TR THERAPY + Laser 12 Watt + 2 x zadarmo" itemPrice="150,- Eur"></TableItem>
              <TableItem itemName="Kinesiotaping - 20 cm" itemPrice="3,- Eur"></TableItem>
              <TableItem itemName="Cvičenie na motodlahe (rameno, koleno) 1 x 30 min" itemPrice="10,- Eur"></TableItem>
              <TableItem itemName="Cvičenie na motodlahe (rameno, koleno) 5 x 30min" itemPrice="40,- Eur"></TableItem>
              <TableItem itemName="Cvičenie na motodlahe (rameno, koleno) 10 x 30 min" itemPrice="70,- Eur"></TableItem>
            </tbody>
          </table>
        </div>
        <p className="co-container__paragraph-narrow co-center">Cenník fyzioterapeutických vyšetrení je platný pre Liptovský Mikuláš a Ružomberok.</p>
      </div>
    </Fade>
  );
}

export const FeesOrtopedic = props => {
  const section = 'fees'
  return (
    <Fade>
      <div className="co-fees-container co-content-container">
        <div className="co-fees-container__table co-center">
          <table id="fees_table">
            <tbody>
              <TableItem itemName="Ortopedické vyšetrenie" itemPrice="10,- Eur"></TableItem>
              <TableItem itemName="Ortopedické vyšetrenie pre posudkové účely (Sociálna poisťovňa)" itemPrice="10,- Eur"></TableItem>
              <TableItem itemName="Denzitometrické vyšetrenie" itemPrice="10,- Eur"></TableItem>
              <TableItem itemName="Intraartikulárna inj. kys. hyaluronovej + kolagén s obsahom účinnej látky 20 mg" itemPrice="35,- Eur"></TableItem>
              <TableItem itemName="Intraartikulárna inj. kys. hyaluronovej + kolagén s obsahom účinnej látky 30 mg" itemPrice="40,- Eur"></TableItem>
              <TableItem itemName="Intraartikulárna inj. kys. hyaluronovej + kolagén s obsahom účinnej látky 60 mg" itemPrice="58,- Eur"></TableItem>
              <TableItem itemName="Intraartikulárna inj. kys. hyaluronovej 2,2%" itemPrice="40,- Eur"></TableItem>
              <TableItem itemName="Intraartikulárna inj. kys. hyaluronovej 2,5%" itemPrice="85,- Eur"></TableItem>
              <TableItem itemName="Intraartikulárna inj. Kolagénu" itemPrice="15,- Eur"></TableItem>
              <TableItem itemName="Liečba krvnou plazmou ACP" itemPrice="400,- Eur"></TableItem>
              <TableItem itemName="Plazmoterapia - LIEČBA AUTOLOGNÝMI PROTEÍNMI - NSTRIDE APS" itemPrice="900,- Eur"></TableItem>
              <TableItem itemName="Punkcia jedného kĺbu s aplikáciou kortikoidu" itemPrice="10,- Eur"></TableItem>
              <TableItem itemName="Rázové vlny jedna aplikácia" itemPrice="20,- Eur"></TableItem>
              <TableItem itemName="Laser jedna aplikácia" itemPrice="3,- Eur"></TableItem>
              <TableItem itemName="Super inductive systém therapia jedna aplikácia" itemPrice="20,- Eur"></TableItem>
              <TableItem itemName="Super inductive systém therapia balík 5 aplikácií" itemPrice="90,- Eur"></TableItem>
              <TableItem itemName="Super inductive systém therapia balík 6 aplikácií" itemPrice="100,- Eur"></TableItem>
            </tbody>
          </table>
        </div>
        <p className="co-container__paragraph-narrow co-center">Cenník ortopedických vyšetrení je platný pre Ružomberok.</p>
        <p className="co-container__paragraph-narrow co-center"><b>Ortopédia v Liptovskom Mikuláši je plne hradená zdravotnými poisťovňami.</b></p>
      </div>
    </Fade>
  );
}
