import React from 'react';
import {Footer, Blog, Impacts, WhatComp, WhatInter, Header} from './containers';
import { Navbar } from './components';
import './App.css';
import timelineElements from "./timelineElements";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Header />
    </div>
    <WhatComp />
    <WhatInter />
      <div>
          <VerticalTimeline style={{color: "blue"}}>
              {timelineElements.map((element) => {
                  return (
                      <VerticalTimelineElement
                          contentStyle={{ background: 'rgba(4, 59, 92, 1)' }}
                          key={element.key}
                          dateClassName="date"
                      >
                          <h3 className="vertical-timeline-element-title" style = {{color: "aqua"}}>
                              {element.title}
                          </h3>
                          <h5 className="vertical-timeline-element-subtitle" style = {{color: "aqua"}}>
                              {element.date}
                          </h5>
                          <p id="description">{element.description}</p>
                      </VerticalTimelineElement>
                  );
              })}
          </VerticalTimeline>
      </div>
    <Impacts />
    <Blog />
    <Footer />
  </div>
);

export default App;
