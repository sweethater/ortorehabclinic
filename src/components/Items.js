import React, { Component } from "react";
import { Fade } from 'react-reveal';

import { allSectionItems } from "./Shared";

import './Shared.css';

export const ItemWrapper = props => {
  // console.log(props);
  const item = props.match.params.item;
  const section = props.location.pathname.split("/").filter(Boolean)[0];
  const itemData = allSectionItems[section][item];
  return (
    <Fade>
      <div className={`co-${section}-container co-item-container co-content-container`}>
        <p className="co-container__header co-center">{itemData.name}</p>
        <div className="co-container__paragraphs co-center">

        </div>
      </div>
    </Fade>
  );
}

export const ItemTabbed = props => {
  console.log(props)
  // const {itemName} = props
  const itemName = "TEST"
  return (
    <Fade>
      <div className="co-item-container co-content-container">
        <p className="co-container__header co-center">{itemName}</p>
        <div className="co-container__paragraphs co-center">

        </div>
      </div>
    </Fade>
  );
}

export const ItemSimple = props => {
  const {itemName, content} = props
  return (
    <Fade>
      <div className="co-item-container co-content-container">
        <p className="co-container__header co-center">{itemName}</p>
        <div className="co-container__paragraphs co-center">

        </div>
      </div>
    </Fade>
  );
}