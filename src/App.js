import React from "react";
import './App.scss';


import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPages from "./AboutPage/AboutPage";
import LoginPage from './LoginPage/LoginPage';
import ChartComponent from "./components/ChartComponent";
import D3Chart from "./components/D3Chart";



function AboutPage() {
  return (
  <Router>
    <Menu />
    <Hero />
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
    <Footer />
  </Router>

     
  );
}

export default AboutPage;
