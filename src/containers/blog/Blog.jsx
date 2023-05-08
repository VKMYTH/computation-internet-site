import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Explore More on the Digital Age</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="August 24, 2021" text="How Technology is Changing the World, and How Should the World Change Technology - UofC Press"/>
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="February 15, 2023" text="Technology in Deep Time: How it Evolves Alongside Us - CBC" />
        <Article imgUrl={blog03} date="May 28, 2021" text="Evolution of Technology and Physical Activity - Frontiers" />
        <Article imgUrl={blog04} date="Nov 18, 2020" text="How Technology has Changed the World Since 2000 - WEF" />
        <Article imgUrl={blog05} date="June 30, 2021" text="Is the Evolution of Technology Inevitable - Taylor & Francis" />
      </div>
    </div>
  </div>
);

export default Blog;
