import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div>
    <h1>About Harry Potter</h1>
    <p>Harry Potter is a series of seven fantasy novels written by British author J.K. Rowling.</p>
    <p><Link to="/">Home</Link></p>
  </div>
);

export default About;