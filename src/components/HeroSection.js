import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>I am Romain Trost</h1>
      <p>I am a professional Data Scienctist and Full Stack Developper. 
         I enjoy working on diverse and challenging coding projects, and love 
         researching and staying up to date with advancements in machine learning.</p>
    </div>
  );
}

export default HeroSection;
