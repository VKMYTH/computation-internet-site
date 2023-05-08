import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatInter.css';

const WhatInter = () => (
  <div className="gpt3__whatgpt3 section__margin" id="winter">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is The Internet?" text="The internet is a global network of interconnected computers and servers that communicate with each other using standard protocols. It enables the exchange of information and data across the world, connecting people, businesses, and governments. The internet has transformed the way we access and share information, communicate with each other, and conduct business." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p><a href="src/components/navbar#blog">Explore the Library</a></p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Protocols" text="The standardized rules and procedures that govern the communication and exchange of data between devices on the internet, including protocols such as TCP/IP, HTTP, and FTP." />
      <Feature title="Services" text="The various applications, tools, and services that are available on the internet, including email, social media, online shopping, and search engines. These services have transformed the way we communicate, access information, and conduct business." />
      <Feature title="Security" text="The measures and technologies used to protect data and information on the internet, including encryption, firewalls, and authentication systems. Security is critical for protecting sensitive information and preventing unauthorized access, hacking, and cyberattacks." />
    </div>
  </div>
);

export default WhatInter;
