import React from "react";
import { Fade } from 'react-reveal';
import { Tabs } from 'antd';

import { allSectionItems } from "./Shared";
import { Orthopedic1 } from "./OrtopedicItems"

import 'antd/dist/antd.css';
import './Tabs.css';
import './Shared.css';

const getComponent = (componentName) => {
  switch (componentName) {
    case "Orthopedic1":
      return Orthopedic1;
    default:
      return Orthopedic1;
  }
}

export const ItemWrapper = props => {
  // console.log(props);
  const item = props.match.params.item;
  const section = props.location.pathname.split("/").filter(Boolean)[0];
  const itemData = allSectionItems[section][item];
  const { name, component } = itemData;
  const { TabPane } = Tabs;

  const callback = (key) => {
    console.log(key);
  }
  const tabs = getComponent(component);
  const renderTabs = tabs.map((tab, i) => <TabPane tab={tab.tabName} key={(i+1).toString()}>{tab.tabContent}</TabPane>)
  return (
    <Fade>
      <div className={`co-${section}-container co-item-container co-content-container`}>
        <p className="co-container__header co-center">{name}</p>
        <div className="co-container__tabs co-center">
        <Tabs defaultActiveKey="1" onChange={callback}>
          {renderTabs}            
        </Tabs>
        </div>
      </div>
    </Fade>
  );
}
