import React, { useState } from 'react';

import { ImageMosaic } from './GalleryMosaic';
import { CoolLightbox } from './GalleryLightbox';
import { imagesOperations, imagesRK, imagesLM } from './GalleryImages'

import { Fade } from 'react-reveal';
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Tabs } from 'antd';

import './Gallery.css';
import 'antd/dist/antd.css';
import './Tabs.css';

export const Gallery = props => {
  const { TabPane } = Tabs;
  return (
    <Fade>
      <div className={`co-gallery-container co-item-container co-content-container`}>
        <p className="co-container__header co-center">Galéria</p>
        <div className="co-container__tabs co-center">
        <Tabs defaultActiveKey="gallery-1" >
          <TabPane tab="Operačné sály a lôžka" key="gallery-1">
            <GalleryWrapper images={imagesOperations}/>
          </TabPane>
          <TabPane tab="Klinika a lekáreň Ružomberok" key="gallery-2">
            <GalleryWrapper images={imagesRK}/>
          </TabPane>
          <TabPane tab="Klinika a lekáreň Liptovský Mikuláš" key="gallery-3">
            <GalleryWrapper images={imagesLM}/>
          </TabPane>
        </Tabs>
        </div>
      </div>
    </Fade>
  );
}

const GalleryWrapper = ({images}) => (
  <ThemeProvider
    theme={{
      pageBackgroundColor: "#101010",
      pageContentFontColor: "#e2e5ec",
      pageContentLinkHoverColor: "#fff",
      pageContentSelectionColor: "#fff",
      headerNavFontColor: "#fff",
      accentColor: "#1f1f1f"
    }}
  >
    <AppContainer>
      <GlobalStyles />
      <ImageGallery images={images}/>
    </AppContainer>
  </ThemeProvider>
);

const ImageGallery = ({images}) => {
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {/* react-photo-gallery */}
      <ImageMosaic
        images={images}
        handleClick={(e, { index }) => {
          setCurrentIndex(index);
          setOpen(true);
        }}
      />
      {/* react-spring-lightbox */}
      <CoolLightbox
        currentImageIndex={currentImageIndex}
        setCurrentIndex={setCurrentIndex}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        images={images}
      />
    </>
  );
};

export const AppContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    > #root {
      height: 100%;
    }
  }
  .react-photo-gallery--gallery {
    padding-top: 8px;
    padding-left: 8px;
  }
`;
