import React from 'react';
import { Link } from 'react-router-dom';
import harryImage from './harry.jpg';

const App = () => (
  <div>
    <h1>Harry Potter</h1>
    <img src={harryImage} alt="Harry Potter" />
    <p><Link to="/about">About</Link></p>
  </div>
);

export default App;

