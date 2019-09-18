import React, { useState } from "react";
import { Fade } from 'react-reveal';
import { Tabs } from 'antd';
import { NavLink } from 'react-router-dom';
import { Player, ControlBar, VolumeMenuButton  } from 'video-react';

import { allSectionItems } from "./Shared";

import 'antd/dist/antd.css';
import './Tabs.css';
import './Shared.css';
import arrow from '../assets/arrow.svg';
import 'video-react/dist/video-react.css';

// import ReactDOM from "react-dom";

// const node = ReactDOM.findDOMNode(this);

// const simulateClick = () => {
//   var evt = document.createEvent("MouseEvents");
//   evt.initMouseEvent("click", true, true, window,
//     0, 0, 0, 0, 0, false, false, false, false, 0, null);
//   const a = node.querySelector('.video-react-video');
//   var a = $(".video-react-video"); 
//   console.log(a);
//   a.dispatchEvent(evt);      
// }

const loadVideoAndPoster = (source) => {
  let url;
  let poster;
  switch (source) {
    case '../assets/videos/ACP.mp4':
      url = require ('../assets/videos/ACP.mp4');
      poster = require ('../assets/videos/posters/ACP.jpg');
      break;
    case '../assets/videos/ACP2.mp4':
      url = require ('../assets/videos/ACP2.mp4');
      poster = require ('../assets/videos/posters/ACP2.jpg');
      break;
    default:
      url = require ('../assets/videos/ACP.mp4');
      poster = require ('../assets/videos/posters/ACP.jpg');
  }
  return {url, poster };
}

export const VideoWrapper = (props) => {
  const { videos } = props; 
  const video = videos[0]
  const [source, setSource] = useState(video.url);

  console.log(props);
  
  const urlAndPoster = loadVideoAndPoster(source);
  const { url, poster } = urlAndPoster;
  return (
    <React.Fragment>
      <Player
        className="co-center"
        autoPlay={false}
        fluid={false}
        // aspectRatio="auto"
        height={520}
        poster={poster}
        src={url}>
        <ControlBar className="co-video-player__constol-bar" autoHide={false} disableDefaultControls></ControlBar>
      </Player>
      <span className="co-tabs--video-divider">ZOZNAM VIDEÍ</span>
      
      <div className="co-tabs--video-thumbs co-center">
        <img className="co-tabs--video-thumb video-1" src={require("../assets/videos/thumbs/ACP.jpg")} onClick={() => setSource("../assets/videos/ACP.mp4")} />
        <img className="co-tabs--video-thumb video-2" src={require("../assets/videos/thumbs/ACP2.jpg")} onClick={() => setSource("../assets/videos/ACP2.mp4")} />
      </div>
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
    // simulateClick();
  }
  const getTabPane = (tab, i) => {
    if (tab.videos) {
      return <TabPane tab={tab.tabName} key={`${item}-${(i+1).toString()}`}>
        <VideoWrapper videos={tab.videos}/>
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
