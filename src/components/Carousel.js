import React from "react";
import { NavLink } from 'react-router-dom';

import AliceCarousel from 'react-alice-carousel';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import detskyUltrazvuk from '../assets//carousel/detsky-ultrazvuk.jpg';
import smSystem from '../assets//carousel/sm-system.jpg';
import trTherapy from '../assets//carousel/tr-therapy.jpg';
import laser12 from '../assets//carousel/laser-12w.jpg';
import plazmoterapia from '../assets//carousel/plazmoterapia.jpg';
import magnetoTerapia from '../assets//carousel/magneto-terapia.jpg';

import detskyUltrazvukSmall from '../assets//carousel/detsky-ultrazvuk_small.jpg';
import smSystemSmall from '../assets//carousel/sm-system_small.jpg';
import trTherapySmall from '../assets//carousel/tr-therapy_small.jpg';
import laser12Small from '../assets//carousel/laser-12w_small.jpg';
import plazmoterapiaSmall from '../assets//carousel/plazmoterapia_small.jpg';
import magnetoTerapiaSmall from '../assets//carousel/magneto-terapia_small.jpg';

import './Carousel.css';
import './Shared.css'
import "react-alice-carousel/lib/alice-carousel.css";

export class Carousel extends React.Component {
  state = {
    currentIndex: 0,
    itemsInSlide: 1,
    galleryItems: this.galleryItems(),
  }

  galleryItems() {
    return (
      [<NavLink className="nav" to="/stuff"><img className="co-home__carousel-image" src={detskyUltrazvuk} href="#"/></NavLink>,
      <NavLink className="nav" to="/stuff"><img className="co-home__carousel-image" src={smSystem} href="#"/></NavLink>,
      <NavLink className="nav" to="/stuff"><img className="co-home__carousel-image" src={trTherapy} href="#"/></NavLink>,
      <NavLink className="nav" to="/stuff"><img className="co-home__carousel-image" src={laser12} href="#"/></NavLink>,
      <NavLink className="nav" to="/stuff"><img className="co-home__carousel-image" src={plazmoterapia} href="#"/></NavLink>,
      <NavLink className="nav" to="/stuff"><img className="co-home__carousel-image" src={magnetoTerapia} href="#"/></NavLink>]
    )
  }

  slidePrevPage = () => {
    const currentIndex = this.state.currentIndex - this.state.itemsInSlide
    this.setState({ currentIndex })
  }

  slideNextPage = () => {
    const { itemsInSlide, galleryItems: { length }} = this.state
    let currentIndex = this.state.currentIndex + itemsInSlide
    if (currentIndex > length) currentIndex = length

    this.setState({ currentIndex })
  }

  highlightCurrentThumb = (index) => {

  }

  handleOnSlideChange = (event) => {
    const { itemsInSlide, item } = event
    this.setState(
      { itemsInSlide, currentIndex: item },
      () => this.highlightCurrentThumb(this.state.currentIndex))
  }

  slideTo = (i) => this.setState({ currentIndex: i })

  render() {
    const { currentIndex, galleryItems, responsive } = this.state;
    const thumbsArray = [detskyUltrazvukSmall, smSystemSmall, trTherapySmall, laser12Small, plazmoterapiaSmall, magnetoTerapiaSmall];
    const thumbs = thumbsArray.map((thumb, i) => <img onClick={() => this.slideTo(i)} className={`co-home__carousel-thumb ${currentIndex === i ? 'co-home__carousel-thumb--highlight' : ''}`} src={thumb} href="#"/>);
    return (
      <div>
        <div className="co-home__carousel-buttons">
          <IoIosArrowBack onClick={this.slidePrevPage} className="co-home__carousel-button--left"/>
          <IoIosArrowForward onClick={this.slideNextPage} className="co-home__carousel-button--right"/>
        </div>
        <AliceCarousel
          autoPlayInterval={4000}
          autoPlayDirection="lrt"
          autoPlay={true}
          items={galleryItems}
          dotsDisabled={true}
          buttonsDisabled={true}
          mouseDragEnabled={false}
          slideToIndex={currentIndex}
          responsive={responsive}
          onInitialized={this.handleOnSlideChange}
          onSlideChanged={this.handleOnSlideChange}
          onResized={this.handleOnSlideChange}
        />
        <div className="co-home__carousel-thumb">
          {thumbs}
        </div>
      </div>
    )
  }
}