import React from 'react';
import '../App.css';
import './HeroSection.css';
import Navbar from './Navbar';

function HeroSection() {
  return (
    <div className='hero'>
      <img src='/images/header-background.jpg'  />
      <Navbar />
      <div className='hero-container'>
        <h1>Hello! I'm</h1>
        <h2>Romain Trost</h2>
        <p>A Data Scientist and Tech Enthusiast from Belgium</p>
      </div>
      
    </div>

  );
}

export default HeroSection;
