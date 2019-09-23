import React from "react";

export const loadThumbs = (setSource, item) => {
    switch (item) {
      case "kineziotaping":
        return <React.Fragment>
          <img className="co-tabs--video-thumb video-2" src={require("../assets/videos/thumbs/kineziotaping-1.jpg")} onClick={() => setSource("../assets/videos/kineziotaping-1.mp4")} />
        </React.Fragment>
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
  
export const getDefaultVideoAndPoster = (item) => {
    let video;
    let poster;
    switch(item) {
      case "kineziotaping":
        video = require ('../assets/videos/kineziotaping-1.mp4');
        poster = require ('../assets/videos/posters/kineziotaping-1.jpg');
        break;
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
  
export const loadVideoAndPoster = (source, item) => {
    let video;
    let poster;
    switch (source) {
      case '../assets/videos/kineziotaping-1.mp4':
          video = require ('../assets/videos/kineziotaping-1.mp4');
          poster = require ('../assets/videos/posters/kineziotaping-1.jpg');
          break;
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


export const imgUrl = (section, imageName) => {
    return "../assets/co-" + section + "/" + imageName + ".jpg";;
}