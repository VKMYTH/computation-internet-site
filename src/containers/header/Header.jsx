import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Learn About the Impacts of Computing and The Internet on Society</h1>
      <p>This website is dedicated to examining the profound impact that computing and the internet have had on the world, from the turn of the 20th century to the present day. Join me on a journey through time to discover how these technologies have revolutionized the way we live, work, and communicate.</p>

      <div className="gpt3__header-content__input">
        <button type="button">Get Started Below</button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
