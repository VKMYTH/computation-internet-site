import React from 'react';
import Feature from '../../components/feature/Feature';
import './impacts.css';

const featuresData = [
  {
    title: 'Global Connectivity',
    text: ' The internet has enabled people from all corners of the world to connect and communicate with each other instantly, transcending geographical boundaries and creating a truly global community.',
  },
  {
    title: 'Information Sharing',
    text: 'The internet has enabled people to share ideas and information like never before. This has led to the creation of a vast online knowledge base that allows anyone to access information on virtually any topic.',
  },
  {
    title: 'E-commerce',
    text: 'The advent of e-commerce has transformed the way we buy and sell goods and services, providing convenience, accessibility, and efficiency for consumers and businesses alike.',
  },
  {
    title: 'Social Networking',
    text: 'Social networking sites like Facebook and Twitter have revolutionized the way we communicate and interact with each other, allowing us to stay connected with friends and family across the globe.',
  },
];

const Impacts = () => (
  <div className="gpt3__features section__padding" id="impacts">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Let's Explore the Impacts Computing and The Internet have had on society from 1900-present.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Impacts;
