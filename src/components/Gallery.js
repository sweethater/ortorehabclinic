import React, { useState } from 'react';

import { ImageMosaic } from './GalleryMosaic';
import { CoolLightbox } from './GalleryLightbox';

import { Fade } from 'react-reveal';
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Tabs } from 'antd';

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
            <GalleryWrapper />
          </TabPane>

          <TabPane tab="Klinika Ružomberok" key="gallery-2">

          </TabPane>

          <TabPane tab="Klinika Liptovský Mikuláš" key="gallery-3">

          </TabPane>

          <TabPane tab="Lekárne" key="gallery-4">

          </TabPane>
        </Tabs>
        </div>
      </div>
    </Fade>
  );
}

const GalleryWrapper = () => (
  <ThemeProvider
    theme={{
      pageBackgroundColor: "#101010",
      pageContentFontColor: "#e2e5ec",
      pageContentLinkHoverColor: "aquamarine",
      pageContentSelectionColor: "aquamarine",
      headerNavFontColor: "#e2e5ec",
      accentColor: "#1f1f1f"
    }}
  >
    <AppContainer>
      <GlobalStyles />
      <ImageGallery />
    </AppContainer>
  </ThemeProvider>
);

const ImageGallery = () => {
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
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
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


const images = [
  {
    src: require ('../assets/videos/posters/laser_12-1.jpg'),
    alt: "README.md",
    caption: "README.md",
    width: 2486,
    height: 1469
  },
  {
    src:
      "https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg",
    alt: "Windows 10 Dark Mode Setting",
    caption: "Windows 10 Dark Mode Setting",
    width: 2848,
    height: 2035
  },
  {
    src:
      "https://timellenberger.com/static/blog-content/dark-mode/macos-dark-mode.png",
    alt: "macOS Mojave Dark Mode Setting",
    caption: "macOS Mojave Dark Mode Setting",
    width: 1200,
    height: 1218
  },
  {
    src:
      "https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg",
    alt: "Android 9.0 Dark Mode Setting",
    caption: "Android 9.0 Dark Mode Setting",
    width: 1280,
    height: 600
  },
  {
    src: "https://i.imgur.com/8oNzu0S.png",
    alt: "README.md",
    caption: "README.md",
    width: 2486,
    height: 1469
  },
  {
    src:
      "https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg",
    alt: "Windows 10 Dark Mode Setting",
    caption: "Windows 10 Dark Mode Setting",
    width: 2848,
    height: 2035
  },
  {
    src:
      "https://timellenberger.com/static/blog-content/dark-mode/macos-dark-mode.png",
    alt: "macOS Mojave Dark Mode Setting",
    caption: "macOS Mojave Dark Mode Setting",
    width: 1200,
    height: 1218
  },
  {
    src:
      "https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg",
    alt: "Android 9.0 Dark Mode Setting",
    caption: "Android 9.0 Dark Mode Setting",
    width: 1280,
    height: 600
  }
];