import React, { useState } from "react";
import { Fade } from 'react-reveal';
import { Tabs } from 'antd';
import { withRouter, NavLink } from 'react-router-dom';
import { Player, ControlBar, BigPlayButton  } from 'video-react';

import { allSectionItems, backTo } from "./Shared";

import 'antd/dist/antd.css';
import './Tabs.css';
import './Shared.css';
import arrow from '../assets/arrow.svg';
import back from '../assets/back2.png';
import 'video-react/dist/video-react.css';

const loadThumbs = (setSource, item) => {
  switch (item) {
    case "laser_12":
      return <React.Fragment>
        <img className="co-tabs--video-thumb video-1" src={require("../assets/videos/thumbs/HighIntensityLaser.jpg")} onClick={() => setSource("../assets/videos/HighIntensityLaser.mp4")} />
        <img className="co-tabs--video-thumb video-2" src={require("../assets/videos/thumbs/HighIntensityLaser2.jpg")} onClick={() => setSource("../assets/videos/HighIntensityLaser2.mp4")} />
      </React.Fragment>
    default:
      return <React.Fragment>
        <img className="co-tabs--video-thumb video-1" src={require("../assets/videos/thumbs/ACP.jpg")} onClick={() => setSource("../assets/videos/ACP.mp4")} />
        <img className="co-tabs--video-thumb video-2" src={require("../assets/videos/thumbs/ACP2.jpg")} onClick={() => setSource("../assets/videos/ACP2.mp4")} />
      </React.Fragment>
  }
}

const getDefaultVideoAndPoster = (item) => {
  let video;
  let poster;
  switch(item) {
    case "laser_12":
      video = require ('../assets/videos/HighIntensityLaser.mp4');
      poster = require ('../assets/videos/posters/HighIntensityLaser.jpg');
      break;
    default:
      video = require ('../assets/videos/ACP.mp4');
      poster = require ('../assets/videos/posters/ACP.jpg');
  }
  return {video, poster}
}

const loadVideoAndPoster = (source, item) => {
  let video;
  let poster;
  switch (source) {
    case '../assets/videos/HighIntensityLaser.mp4':
      video = require ('../assets/videos/HighIntensityLaser.mp4');
      poster = require ('../assets/videos/posters/HighIntensityLaser.jpg');
      break;
    case '../assets/videos/HighIntensityLaser2.mp4':
      video = require ('../assets/videos/HighIntensityLaser2.mp4');
      poster = require ('../assets/videos/posters/HighIntensityLaser2.jpg');
      break;
    case '../assets/videos/ACP.mp4':
      video = require ('../assets/videos/ACP.mp4');
      poster = require ('../assets/videos/posters/ACP.jpg');
      break;
    case '../assets/videos/ACP2.mp4':
      video = require ('../assets/videos/ACP2.mp4');
      poster = require ('../assets/videos/posters/ACP2.jpg');
      break;
    default:
      const videoAndPoster = getDefaultVideoAndPoster(item);
      video = videoAndPoster.video;
      poster = videoAndPoster.poster
  }
  return {video, poster};
}

export const VideoWrapper = (props) => {
  const { item, videoRef} = props;
  const [source, setSource] = useState("");
  const thumbs = loadThumbs(setSource, item)
  const urlAndPoster = loadVideoAndPoster(source, item);
  const { video, poster } = urlAndPoster;
  
  return (
    <React.Fragment>
      <div className="co-tabs--video-wrapper">
        <Player
          ref={videoRef}
          className="co-center"
          autoPlay={false}
          fluid={false}
          width={920}
          height={520}
          poster={poster}
          src={video}>
          <ControlBar className="co-video-player__constol-bar" autoHide={false} disableDefaultControls></ControlBar>
          <BigPlayButton position="center" />
        </Player>
        {/* <span className="co-tabs--video-divider">ZOZNAM VIDEÍ</span> */}
        <div className="co-tabs--video-thumbs co-center" >
          {thumbs}
        </div>
      </div>
    </React.Fragment>
  );
}

export class ItemWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      section: props.location.pathname.split("/").filter(Boolean)[0],
      item: props.location.pathname.split("/").filter(Boolean)[1],
    }
  }
  _tabCallback(key) {
    console.log(this.videoRef.current);
    if (this.videoRef.current) {
      this.videoRef.current.pause();
    }
    console.log(key);
  }

  redirect(section, item) {
    this.setState({
      section,
      item,
    })
  }

  render() {
    const { section, item } = this.state;
    const itemData = allSectionItems[section][item];
    const { name, component } = itemData;
    const { TabPane } = Tabs;
    console.log(`${section} => ${item}`);

    const getTabPane = (tab, i) => {
      if (tab.videos) {
        return <TabPane tab={tab.tabName} key={`${item}-${(i+1).toString()}`}>
          <VideoWrapper item={item} videoRef={this.videoRef}/>
        </TabPane>
      }
      return <TabPane tab={tab.tabName} key={`${item}-${(i+1).toString()}`}>
        {tab.tabContent}
      </TabPane>
    }
    console.log(component)
    // const renderTabs = component.tabs.map((tab, i) => getTabPane(tab, i))
    // const renderTabs = component.tabs.map((tab, i) => <TabPane tab={tab.tabName} key={`${item}-${(i+1).toString()}`}>{tab.tabContent}</TabPane>)
    return (
    <React.Fragment>
      <NavLink className="navigation-item--back" to={backTo(window.location.pathname)}><img src={back} /></NavLink>
      <Fade>
        <div className={`co-${section}-container co-item-container co-content-container`}>
          <p className="co-container__header co-center">{name}</p>
          {component.about}
          <div className="co-container__tabs co-center">
          <Tabs defaultActiveKey={`${item}-1`} onChange={() => this._tabCallback()} >
            {component.tabs.map((tab, i) => getTabPane(tab, i))}
            <TabPane tab="DOPLNKOVÁ LIEČBA" key={`${item}-${(component.tabs.length+1).toString()}`}>
              <AdditionalTreatmentTab redirect={this.redirect.bind(this)}/>
            </TabPane>
          </Tabs>
          </div>
          {component.footer}
        </div>
      </Fade>
    </React.Fragment>
    );
  }
}

const AdditionalTreatmentTab = ({redirect}) => {
  return <React.Fragment>
    <div className="co-container__tab-list co-center">
      <div className="co-container__tab-list-links-column co-center">
        <ul>
          <li><img className="co-tab-item__arrow-image" onClick={() => redirect("fyzio", "vykonny_indukcny_system")} src={arrow}/>Výkonný indukčný systém</li>
          <li><img className="co-tab-item__arrow-image" onClick={() => redirect("orthopedic", "plazmoterapia")} src={arrow}/>Plazmoterapia</li>
          <li><img className="co-tab-item__arrow-image" onClick={() => redirect("fyzio", "tr_therapy")} src={arrow}/>TR terapia</li>
          <li><img className="co-tab-item__arrow-image" onClick={() => redirect("fyzio", "makke_techniky")} src={arrow}/>Mäkké techniky</li>
          <li><img className="co-tab-item__arrow-image" onClick={() => redirect("fyzio", "sm_system")} src={arrow}/>SM systém</li>
        </ul>
      </div>
      <div className="co-container__tab-list-links-column co-center">
        <ul>
          <li><img className="co-tab-item__arrow-image" onClick={() => redirect("fyzio", "trx")} src={arrow}/>TRX</li>
          <li><img className="co-tab-item__arrow-image" onClick={() => redirect("orthopedic", "kineziotaping")} src={arrow}/>Kinesiotaping</li>
          <li><img className="co-tab-item__arrow-image" onClick={() => redirect("fyzio", "skupinove_cvicenia")} src={arrow}/>Skupinové cvičenia</li>
          <li><img className="co-tab-item__arrow-image" onClick={() => redirect("fyzio", "motodlaha")} src={arrow}/>Motodlaha</li>
        </ul>
      </div>
    </div>
  </React.Fragment>
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
