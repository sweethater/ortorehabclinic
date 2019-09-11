import React from 'react';
import { NavLink, Route, BrowserRouter } from 'react-router-dom';

import { Home, Orthopedic, Patient, Fyzio, Rehab, Denzito, Gallery } from "./Home";
import { Fees, FeesOrtopedic, FeesFyzio } from "./Fees";
import { Contacts } from "./Contacts";
import { ItemWrapper } from "./Items";
import { NavItem, NavHeader } from "./Nav";
import back from '../assets/back2.png';
import './App.css';

const backTo = (href) => {
  console.log(href);
  return "/";
}

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="side-container">
          <NavLink className="navigation-item--back" to={backTo(window.location.href)}><img src={back} /></NavLink>

          <NavLink className="navigation-item" to="/"><NavHeader /></NavLink>
          <NavLink className="navigation-item" to="/patient"><NavItem title="Pacienti" index={1} /></NavLink>
          <NavLink className="navigation-item" to="/orthopedic"><NavItem title="Ortopédia" index={2} /></NavLink>
          <NavLink className="navigation-item" to="/fyzio"><NavItem title="Fyzioterapia" index={3} /></NavLink>
          <NavLink className="navigation-item" to="/rehab"><NavItem title="Rehabilitácia" index={4} /></NavLink>
          <NavLink className="navigation-item" to="/denzito"><NavItem title="Denzitometria" index={5} /></NavLink>
          <NavLink className="navigation-item" to="/gallery"><NavItem title="Galéria" index={6} /></NavLink>
          <NavLink className="navigation-item" to="/fees"><NavItem title="Cenník" index={7} /></NavLink>
          <NavLink className="navigation-item" to="/contacts"><NavItem title="Kontakty" index={8} /></NavLink>
        </div>
        <div className="main-container">
          <Route exact path="/" component={Home}/>
          <Route path="/patient" component={Patient}/>
          <Route path="/orthopedic/:item" component={ItemWrapper}/>
          <Route path="/orthopedic" component={Orthopedic}/>
          <Route path="/fyzio" component={Fyzio}/>
          <Route path="/rehab" component={Rehab}/>
          <Route path="/denzito" component={Denzito}/>
          <Route path="/gallery" component={Gallery}/>
          <Route exact path="/fees" component={Fees}/>
          <Route path="/fees/fyzio" component={FeesFyzio}/>
          <Route path="/fees/ortopedic" component={FeesOrtopedic}/>
          <Route path="/contacts" component={Contacts}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
