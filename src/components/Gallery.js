import React, { useState } from 'react';

import { Fade } from 'react-reveal';
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

