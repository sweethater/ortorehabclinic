import React from 'react';
import { NavLink, Route, BrowserRouter, Redirect } from 'react-router-dom';
import IdleTimer from 'react-idle-timer'

import { Home, Orthopedic, Patient, Fyzio, Rehab, Denzito } from "./Home";
import { Gallery } from './Gallery';
import { Fees, FeesOrtopedic, FeesFyzio } from "./Fees";
import { Contacts } from "./Contacts";
import { ItemWrapper } from "./Tabs";
import { withBackButton } from "./Shared";
import { NavItem, NavHeader } from "./Nav";
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.idleTimer = null;
    this.onAction = this._onAction.bind(this);
    this.onActive = this._onActive.bind(this);
    this.onIdle = this._onIdle.bind(this);
    this.state = {
      redirectHome: false
    };
  }
 
  render() {
    return (
      <div>
        <IdleTimer
          ref={ref => { this.idleTimer = ref }}
          element={document}
          onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
          debounce={250}
          // redirect after 5 minutes of idle user
          timeout={1000 * 60 * 5} />
        <BrowserRouter>
          {this.state.redirectHome === true && <Redirect to='/' />}

          <div className="app-container">
            <div className="side-container">
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
              <Route path="/patient" component={withBackButton(Patient)}/>
              <Route path="/orthopedic/:item" component={ItemWrapper}/>
              <Route exact path="/orthopedic" component={withBackButton(Orthopedic)}/>
              <Route path="/fyzio/:item" component={ItemWrapper}/>
              <Route exact path="/fyzio" component={withBackButton(Fyzio)}/>
              <Route path="/rehab/:item" component={ItemWrapper}/>
              <Route exact path="/rehab" component={withBackButton(Rehab)}/>
              <Route path="/denzito/:item" component={ItemWrapper}/>
              <Route exact path="/denzito" component={withBackButton(Denzito)}/>
              <Route path="/gallery" component={withBackButton(Gallery)}/>
              <Route exact path="/fees" component={withBackButton(Fees)}/>
              <Route path="/fees/fyzio" component={withBackButton(FeesFyzio)}/>
              <Route path="/fees/ortopedic" component={withBackButton(FeesOrtopedic)}/>
              <Route path="/contacts" component={withBackButton(Contacts)}/>
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
 
  _onAction(e) {
    console.log('user did something', e);
  }
 
  _onActive(e) {
    console.log('user is active', e);
    console.log('time remaining', this.idleTimer.getRemainingTime());
    this.setState({redirectHome: false});
  }
 
  _onIdle(e) {
    console.log('user is idle', e);
    console.log('last active', this.idleTimer.getLastActiveTime());
    this.setState({redirectHome: true});
  }
}

// Legacy Code
//
// const App = (props) => {
//   return (
//     <BrowserRouter>
//       <div className="app-container">
//         <div className="side-container">
//           <NavLink className="navigation-item" to="/"><NavHeader /></NavLink>
//           <NavLink className="navigation-item" to="/patient"><NavItem title="Pacienti" index={1} /></NavLink>
//           <NavLink className="navigation-item" to="/orthopedic"><NavItem title="Ortopédia" index={2} /></NavLink>
//           <NavLink className="navigation-item" to="/fyzio"><NavItem title="Fyzioterapia" index={3} /></NavLink>
//           <NavLink className="navigation-item" to="/rehab"><NavItem title="Rehabilitácia" index={4} /></NavLink>
//           <NavLink className="navigation-item" to="/denzito"><NavItem title="Denzitometria" index={5} /></NavLink>
//           <NavLink className="navigation-item" to="/gallery"><NavItem title="Galéria" index={6} /></NavLink>
//           <NavLink className="navigation-item" to="/fees"><NavItem title="Cenník" index={7} /></NavLink>
//           <NavLink className="navigation-item" to="/contacts"><NavItem title="Kontakty" index={8} /></NavLink>
//         </div>
//         <div className="main-container">
//           <Route exact path="/" component={Home}/>
//           <Route path="/patient" component={withBackButton(Patient)}/>
//           <Route path="/orthopedic/:item" component={ItemWrapper}/>
//           <Route exact path="/orthopedic" component={withBackButton(Orthopedic)}/>
//           <Route path="/fyzio/:item" component={ItemWrapper}/>
//           <Route exact path="/fyzio" component={withBackButton(Fyzio)}/>
//           <Route path="/rehab/:item" component={ItemWrapper}/>
//           <Route exact path="/rehab" component={withBackButton(Rehab)}/>
//           <Route path="/denzito/:item" component={ItemWrapper}/>
//           <Route exact path="/denzito" component={withBackButton(Denzito)}/>
//           <Route path="/gallery" component={withBackButton(Gallery)}/>
//           <Route exact path="/fees" component={withBackButton(Fees)}/>
//           <Route path="/fees/fyzio" component={withBackButton(FeesFyzio)}/>
//           <Route path="/fees/ortopedic" component={withBackButton(FeesOrtopedic)}/>
//           <Route path="/contacts" component={withBackButton(Contacts)}/>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }