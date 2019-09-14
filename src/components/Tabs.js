import React from "react";
import { Fade } from 'react-reveal';
import { Tabs } from 'antd';
import { NavLink } from 'react-router-dom';

import { allSectionItems } from "./Shared";

import 'antd/dist/antd.css';
import './Tabs.css';
import './Shared.css';
import arrow from '../assets/arrow.svg';

export const ItemWrapper = props => {
  const item = props.match.params.item;
  const section = props.location.pathname.split("/").filter(Boolean)[0];
  const itemData = allSectionItems[section][item];
  const { name, component } = itemData;
  const { TabPane } = Tabs;

  const callback = (key) => {
    console.log(key);
  }
  const renderTabs = component.tabs.map((tab, i) => <TabPane tab={tab.tabName} key={(i+1).toString()}>{tab.tabContent}</TabPane>)
  return (
    <Fade>
      <div className={`co-${section}-container co-item-container co-content-container`}>
        <p className="co-container__header co-center">{name}</p>
        {component.about}
        <div className="co-container__tabs co-center">
        <Tabs defaultActiveKey="1" onChange={callback}>
          {renderTabs}            
        </Tabs>
        </div>
        {component.footer}
      </div>
    </Fade>
  );
}

export const TabListLinks = ({items}) => {
  return (
    <div className="co-container__tab-list-links-column co-center">
      <ul>
        {items.map((item, i) => <NavLink key={i} className="nav" to={`/`}>
          <li key={i}><img className="co-tab-item__arrow-image" src={arrow}/>{item}</li>
        </NavLink>)}
      </ul>
    </div>
  )
}

export const TabList = ({items}) => {
  if (typeof items[0] === 'object') {
    return (
      <div className="co-container__tab-list-column co-center">
        <ul>
          {items.map((item, i) => <li key={i}><b>{item.question}</b><br/>{item.answer}</li>)}
        </ul>
      </div>
    )
  }
  return (
    <div className="co-container__tab-list-column co-center">
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}
