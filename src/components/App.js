import React from 'react';
import { NavLink, HashRouter, Route } from 'react-router-dom';

import Home from "./Home";
import Stuff from "./Stuff";
import { NavItem, NavHeader } from "./Nav";
import back from '../assets/back2.png';
import './App.css';

const App = () => {
  
  return (
    <HashRouter>
      <div className="app-container">
        <div className="side-container">
          <NavLink className="navigation-item--back" to="/"><img src={back} /></NavLink>
          <NavLink className="navigation-item" to="/"><NavHeader /></NavLink>
          <NavLink className="navigation-item" to="/"><NavItem title="Pacienti" index={1} /></NavLink>
          <NavLink className="navigation-item" to="/"><NavItem title="Ortopédia" index={2} /></NavLink>
          <NavLink className="navigation-item" to="/stuff"><NavItem title="Fyzioterapia" index={3} /></NavLink>
          <NavLink className="navigation-item" to="/new_stuff"><NavItem title="Rehabilitácia" index={4} /></NavLink>
          <NavLink className="navigation-item" to="/stuff"><NavItem title="Denzitometria" index={5} /></NavLink>
          <NavLink className="navigation-item" to="/new_stuff"><NavItem title="Galéria" index={6} /></NavLink>
          <NavLink className="navigation-item" to="/new_stuff"><NavItem title="Poplatky" index={7} /></NavLink>
          <NavLink className="navigation-item" to="/stuff"><NavItem title="Kontakt" index={8} /></NavLink>
        </div>
        <div className="main-container">
          <Route exact path="/" component={Home}/>
          <Route path="/stuff" component={Stuff}/>
          <Route path="/new_stuff" component={Home}/>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
