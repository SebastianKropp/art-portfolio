import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Lithographs from './components/Lithographs';
import ScreenPrints from './components/ScreenPrints';
import Intaglio from './components/Intaglio';
import ReliefPrints from './components/ReliefPrints';
import EcoPrints from './components/EcoPrints';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/lithographs" element={<Lithographs/>} />
        <Route path="/screenprints" element={<ScreenPrints/>} />
        <Route path="/intaglio" element={<Intaglio/>} />
        <Route path="/reliefprints" element={<ReliefPrints/>} />
        <Route path="/ecoprints" element={<EcoPrints/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
