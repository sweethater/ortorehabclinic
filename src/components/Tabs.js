import React, { useState } from "react";
import { Fade } from 'react-reveal';
import { Tabs } from 'antd';
import { NavLink } from 'react-router-dom';
import VideoPlayer from 'react-simple-video-player';

import { allSectionItems } from "./Shared";

import 'antd/dist/antd.css';
import './Tabs.css';
import './Shared.css';
import arrow from '../assets/arrow.svg';

// import ReactDOM from "react-dom";

// const node = ReactDOM.findDOMNode(this);

const simulateClick = () => {
  // var evt = document.createEvent("MouseEvents");
  // evt.initMouseEvent("click", true, true, window,
  //   0, 0, 0, 0, 0, false, false, false, false, 0, null);
  // const a = node.querySelector('.kokot svg');
  // var a = $(".kokot svg"); 
  // console.log(a);
  // a.dispatchEvent(evt);      
}

export const VideoWrapper = (props) => {
  const [section, setSection] = useState();
  const { videos } = props; 
  const video = videos[0]
  // const myRef = React.createRef();
  const url = require ('../assets/videos/ACP.mp4');
  return (
    <React.Fragment>
      <div className="111111"><VideoPlayer url={url} /></div><div className="2222222"><VideoPlayer url={url} /></div>
    </React.Fragment>
  );
}

export const ItemWrapper = props => {
  const [render, setRender] = useState(false);

  const item = props.match.params.item;
  const section = props.location.pathname.split("/").filter(Boolean)[0];
  const itemData = allSectionItems[section][item];
  const { name, component } = itemData;
  const { TabPane } = Tabs;

  const callback = (key) => {
    console.log(key);
    setRender(key)
    simulateClick();
  }
  const getTabPane = (tab, i) => {
    if (tab.videos) {
      // const { url, ref, play } = tab.videos
      return <TabPane tab={tab.tabName} key={`${item}-${(i+1).toString()}`}>
        <VideoWrapper videos/>
      </TabPane>
    }
    return <TabPane tab={tab.tabName} key={`${item}-${(i+1).toString()}`}>{tab.tabContent}</TabPane>
  }
  // const renderTabs = component.tabs.map((tab, i) => getTabPane(tab, i))
  // const renderTabs = component.tabs.map((tab, i) => <TabPane tab={tab.tabName} key={`${item}-${(i+1).toString()}`}>{tab.tabContent}</TabPane>)
  return (
    <Fade>
      <div className={`co-${section}-container co-item-container co-content-container`}>
        <p className="co-container__header co-center">{name}</p>
        {component.about}
        <div className="co-container__tabs co-center">
        <Tabs defaultActiveKey={`${item}-1`} onChange={callback}>
          {component.tabs.map((tab, i) => getTabPane(tab, i))}            
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
        {items.map((item, i) => <NavLink key={i} className="nav" to={item.link}>
          <li key={i}><img className="co-tab-item__arrow-image" src={arrow}/>{item.name}</li>
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
        {items.map((item, i) => <li key={i}>{item.charAt(0).toUpperCase() + item.slice(1)}</li>)}
      </ul>
    </div>
  )
}
