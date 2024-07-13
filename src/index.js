import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import About from './About';
import Fact from './Fact';
import './index.css';

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/:factId" element={<Fact />} />
    </Routes>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));