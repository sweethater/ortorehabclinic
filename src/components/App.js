import React from 'react';
import { NavLink, HashRouter, Route} from 'react-router-dom';

import Home from "./Home";
import Stuff from "./Stuff";
import { NavItem, NavHeader } from "./Nav";
import logo from '../assets/logo.svg';
import './App.css';

const App = () => {
  return (
    <HashRouter>
      <div className="app-container">
        <div className="side-container">
          <NavLink className="navigation-item" to="/"><NavHeader /></NavLink>
          <NavLink className="navigation-item" to="/"><NavItem title="PACIENTI" index={1} /></NavLink>
          <NavLink className="navigation-item" to="/"><NavItem title="ORTOPEDIA" index={2} /></NavLink>
          <NavLink className="navigation-item" to="/stuff"><NavItem title="FYZIOTERAPIA" index={3} /></NavLink>
          <NavLink className="navigation-item" to="/new_stuff"><NavItem title="REHABILITACIA" index={4} /></NavLink>
          <NavLink className="navigation-item" to="/stuff"><NavItem title="DENZITOMETRIA" index={5} /></NavLink>
          <NavLink className="navigation-item" to="/new_stuff"><NavItem title="GALERIA" index={6} /></NavLink>
          <NavLink className="navigation-item" to="/new_stuff"><NavItem title="POPLATKY" index={7} /></NavLink>
          <NavLink className="navigation-item" to="/stuff"><NavItem title="KONTAKT" index={8} /></NavLink>
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
