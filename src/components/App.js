import React from 'react';
import { NavLink, HashRouter, Route} from 'react-router-dom';

import Home from "./Home";
import Stuff from "./Stuff";
import { NavItem } from "./Nav";
import logo from '../assets/logo.svg';
import './App.css';

const App = () => {
  return (
    <HashRouter>
      <div className="app-container">
        <div className="side-container">
        </div>
        <div className="main-container">
          <Route exact path="/" component={Home}/>
          <Route path="/stuff" component={Stuff}/>
          <Route path="/new_stuff" component={Home}/>
        </div>
        <div className="navigation-container">
          <NavLink className="nav" to="/"><NavItem title="PACIENTI"/></NavLink>
          {/* <NavLink className="nav" to="/">PACIENTI</NavLink> */}
          <NavLink className="nav" to="/stuff">ORTOPEDIA</NavLink>
          <NavLink className="nav" to="/new_stuff">FYZIOTERAPIA</NavLink>
          <NavLink className="nav" to="/stuff">REHABILITACIE</NavLink>
          <NavLink className="nav" to="/new_stuff">DENZITOMETRIA</NavLink>
          <NavLink className="nav" to="/stuff">PRISTROJE</NavLink>
          <NavLink className="nav" to="/new_stuff">CENNIK</NavLink>
          <NavLink className="nav" to="/stuff">KONTAKT</NavLink>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
