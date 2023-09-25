import React from 'react';
import '../../../App.css';
import HeroSection from './HeroSection';
import FadeTransitionSection from './FadeTransitionSection';
import ContentSection from './ContentSection';

function Home() {
  return (
    <>
      <HeroSection />
      <FadeTransitionSection />
      <ContentSection />
    </>
  );
}

export default Home;
