import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>I am Romain Trost</h1>
      <p>I love PELINUS de TOUT MON COEUR heart </p>
    </div>
  );
}

export default HeroSection;
