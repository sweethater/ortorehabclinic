import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Gallery from "react-photo-gallery";

export const GridImage = ({ key, index, left, top, photo, onClick }) => {
  const { height, width, src, alt, caption } = photo;
  return (
    <ImageContainer
      key={`${key}-${index}`}
      index={index}
      onClick={e => onClick(e, { index })}
      style={{ left, top, height, width }}
    >
      <OverlayContainer>
        <Image src={src} alt={alt} caption={caption} />
        <Caption>
          <h4>{caption}</h4>
        </Caption>
      </OverlayContainer>
    </ImageContainer>
  );
};

export const ImageMosaic = ({ images, handleClick }) => (
  <GalleryContainer>
    <Gallery
      columns={containerWidth => {
        let columns = 1;
        if (containerWidth >= 500) columns = 2;
        if (containerWidth >= 900) columns = 3;

        return columns;
      }}
      onClick={handleClick}
      photos={images}
      margin={6}
      direction="column"
      renderImage={GridImage}
    />
  </GalleryContainer>
);
  
const GalleryContainer = styled.div`
  overflow-y: auto;
  height: 100%;
  max-height: calc(100% - 4em);
  padding: 2em;
`;
  

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.pageContentLinkHoverColor};
  h4 {
    text-align: center;
    margin: 1em 0;
  }
`;

const OverlayContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  transition: border-color 0.2s linear;
  display: block;
  position: absolute;
  cursor: pointer;
  border-width: 2px;
  border-color: transparent;
  border-style: solid;
  :hover {
    border-color: ${({ theme }) => theme.pageContentLinkHoverColor};
  }
`;

const Image = styled.img`
  width: inherit;
  height: inherit;
  position: absolute;
`;
