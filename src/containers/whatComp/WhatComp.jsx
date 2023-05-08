import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatComp.css';

const WhatComp = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wcomp">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Computing?" text="Computing is the use of computers and software to process, store, and transmit information. It involves the manipulation of data and the execution of instructions using algorithms and programming languages. Computing has revolutionized the way we live, work, and communicate, and has enabled breakthroughs in fields such as science, medicine, and engineering." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p><a href="src/components/navbar#blog">Explore the Library</a></p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Hardware" text="The physical components of a computer, including the central processing unit (CPU), memory, storage devices, input/output devices, and other peripheral devices. These components work together to process data and execute instructions." />
      <Feature title="Software" text="The programs, applications, and operating systems that run on a computer or mobile device. It provides the interface through which users interact with the hardware, enabling them to perform tasks and access information." />
      <Feature title="Networking" text="The communication and data exchange between computers, servers, and other devices, typically through the internet or other networks. Networking allows for remote access, data sharing, and collaboration, and is essential for many modern applications and services." />
    </div>
  </div>
);

export default WhatComp;
