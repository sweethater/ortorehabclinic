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
        <img className="co-tabs--video-thumb video-1" src={require("../assets/videos/thumbs/laser_12-1.jpg")} onClick={() => setSource("../assets/videos/laser_12-1.mp4")} />
        <img className="co-tabs--video-thumb video-2" src={require("../assets/videos/thumbs/laser_12-2.jpg")} onClick={() => setSource("../assets/videos/laser_12-2.mp4")} />
      </React.Fragment>
    case "plazmoterapia":
      return <React.Fragment>
        <img className="co-tabs--video-thumb video-1" src={require("../assets/videos/thumbs/plazmoterapia-1.jpg")} onClick={() => setSource("../assets/videos/plazmoterapia-1.mp4")} />
        <img className="co-tabs--video-thumb video-2" src={require("../assets/videos/thumbs/plazmoterapia-2.jpg")} onClick={() => setSource("../assets/videos/plazmoterapia-2.mp4")} />
      </React.Fragment>
    case "tr_therapy":
        return <React.Fragment>
          <img className="co-tabs--video-thumb video-1" src={require("../assets/videos/thumbs/tr_therapy-1.jpg")} onClick={() => setSource("../assets/videos/tr_therapy-1.mp4")} />
          <img className="co-tabs--video-thumb video-2" src={require("../assets/videos/thumbs/tr_therapy-2.jpg")} onClick={() => setSource("../assets/videos/tr_therapy-2.mp4")} />
        </React.Fragment>
    case "vykonny_indukcny_system":
        return <React.Fragment>
          <img className="co-tabs--video-thumb video-1" src={require("../assets/videos/thumbs/vykonny_indukcny_system-1.jpg")} onClick={() => setSource("../assets/videos/vykonny_indukcny_system-1.mp4")} />
          <img className="co-tabs--video-thumb video-2" src={require("../assets/videos/thumbs/vykonny_indukcny_system-2.jpg")} onClick={() => setSource("../assets/videos/vykonny_indukcny_system-2.mp4")} />
          <img className="co-tabs--video-thumb video-2" src={require("../assets/videos/thumbs/vykonny_indukcny_system-3.jpg")} onClick={() => setSource("../assets/videos/vykonny_indukcny_system-3.mp4")} />
          <img className="co-tabs--video-thumb video-2" src={require("../assets/videos/thumbs/vykonny_indukcny_system-4.jpg")} onClick={() => setSource("../assets/videos/vykonny_indukcny_system-4.mp4")} />
        </React.Fragment>
    default:
      return <React.Fragment>
        <img className="co-tabs--video-thumb video-1" src={require("../assets/videos/thumbs/laser_12-1.jpg")} onClick={() => setSource("../assets/videos/laser_12-1.mp4")} />
        <img className="co-tabs--video-thumb video-2" src={require("../assets/videos/thumbs/laser_12-2.jpg")} onClick={() => setSource("../assets/videos/laser_12-2.mp4")} />
      </React.Fragment>
  }
}

const getDefaultVideoAndPoster = (item) => {
  let video;
  let poster;
  switch(item) {
    case "laser_12":
      video = require ('../assets/videos/laser_12-1.mp4');
      poster = require ('../assets/videos/posters/laser_12-1.jpg');
      break;
    case "plazmoterapia":
      video = require ('../assets/videos/plazmoterapia-1.mp4');
      poster = require ('../assets/videos/posters/plazmoterapia-1.jpg');
      break;
    case "tr_therapy":
      video = require ('../assets/videos/tr_therapy-1.mp4');
      poster = require ('../assets/videos/posters/tr_therapy-1.jpg');
      break;
    case "vykonny_indukcny_system":
      video = require ('../assets/videos/vykonny_indukcny_system-1.mp4');
      poster = require ('../assets/videos/posters/vykonny_indukcny_system-1.jpg');
      break;
    default:
      video = require ('../assets/videos/laser_12-1.mp4');
      poster = require ('../assets/videos/posters/laser_12-1.jpg');
  }
  return {video, poster}
}

const loadVideoAndPoster = (source, item) => {
  let video;
  let poster;
  switch (source) {
    case '../assets/videos/laser_12-1.mp4':
      video = require ('../assets/videos/laser_12-1.mp4');
      poster = require ('../assets/videos/posters/laser_12-1.jpg');
      break;
    case '../assets/videos/laser_12-2.mp4':
      video = require ('../assets/videos/laser_12-2.mp4');
      poster = require ('../assets/videos/posters/laser_12-2.jpg');
      break;
    case '../assets/videos/plazmoterapia-1.mp4':
      video = require ('../assets/videos/plazmoterapia-1.mp4');
      poster = require ('../assets/videos/posters/plazmoterapia-1.jpg');
      break;
    case '../assets/videos/plazmoterapia-2.mp4':
      video = require ('../assets/videos/plazmoterapia-2.mp4');
      poster = require ('../assets/videos/posters/plazmoterapia-2.jpg');
      break;
    case '../assets/videos/tr_therapy-1.mp4':
      video = require ('../assets/videos/tr_therapy-1.mp4');
      poster = require ('../assets/videos/posters/tr_therapy-1.jpg');
      break;
    case '../assets/videos/tr_therapy-2.mp4':
      video = require ('../assets/videos/tr_therapy-2.mp4');
      poster = require ('../assets/videos/posters/tr_therapy-2.jpg');
      break;
    case '../assets/videos/vykonny_indukcny_system-1.mp4':
      video = require ('../assets/videos/vykonny_indukcny_system-1.mp4');
      poster = require ('../assets/videos/posters/vykonny_indukcny_system-1.jpg');
      break;
    case '../assets/videos/vykonny_indukcny_system-2.mp4':
      video = require ('../assets/videos/vykonny_indukcny_system-2.mp4');
      poster = require ('../assets/videos/posters/vykonny_indukcny_system-2.jpg');
      break;
    case '../assets/videos/vykonny_indukcny_system-3.mp4':
      video = require ('../assets/videos/vykonny_indukcny_system-3.mp4');
      poster = require ('../assets/videos/posters/vykonny_indukcny_system-3.jpg');
      break;
    case '../assets/videos/vykonny_indukcny_system-4.mp4':
      video = require ('../assets/videos/vykonny_indukcny_system-4.mp4');
      poster = require ('../assets/videos/posters/vykonny_indukcny_system-4.jpg');
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
      if (tab.tabName === "VIDEO") {
        return <TabPane tab={tab.tabName} key={`${item}-${(i+1).toString()}`}>
          <VideoWrapper item={item} videoRef={this.videoRef}/>
        </TabPane>
      }
      if (tab.tabName === "DOPLNKOVÁ LIEČBA") {
        return <TabPane tab={tab.tabName} key={`${item}-${(i+1).toString()}`}>
          <AdditionalTreatmentTab redirect={this.redirect.bind(this)}/>
        </TabPane>
      }
      return <TabPane tab={tab.tabName} key={`${item}-${(i+1).toString()}`}>
        {tab.tabContent}
      </TabPane>
    }
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
          <li onClick={() => redirect("fyzio", "vykonny_indukcny_system")}><img className="co-tab-item__arrow-image" src={arrow}/>Výkonný indukčný systém</li>
          <li onClick={() => redirect("orthopedic", "plazmoterapia")}><img className="co-tab-item__arrow-image" src={arrow}/>Plazmoterapia</li>
          <li onClick={() => redirect("fyzio", "tr_therapy")}><img className="co-tab-item__arrow-image" src={arrow}/>TR terapia</li>
          <li onClick={() => redirect("fyzio", "makke_techniky")}><img className="co-tab-item__arrow-image" src={arrow}/>Mäkké techniky</li>
          <li onClick={() => redirect("fyzio", "sm_system")}><img className="co-tab-item__arrow-image" src={arrow}/>SM systém</li>
        </ul>
      </div>
      <div className="co-container__tab-list-links-column co-center">
        <ul>
          <li onClick={() => redirect("fyzio", "trx")}><img className="co-tab-item__arrow-image" src={arrow}/>TRX</li>
          <li onClick={() => redirect("orthopedic", "kineziotaping")}><img className="co-tab-item__arrow-image" src={arrow}/>Kinesiotaping</li>
          <li onClick={() => redirect("fyzio", "skupinove_cvicenia")}><img className="co-tab-item__arrow-image" src={arrow}/>Skupinové cvičenia</li>
          <li onClick={() => redirect("fyzio", "motodlaha")}><img className="co-tab-item__arrow-image" src={arrow}/>Motodlaha</li>
        </ul>
      </div>
    </div>
  </React.Fragment>
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
