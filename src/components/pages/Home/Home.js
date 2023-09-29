import React from 'react';
import '../../../App.css';
import Navbar from '../../Navbar';
import HeroSection from './HeroSection';
import ContentSection from './ContentSection';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ContentSection />
    </>
  );
}

export default Home;
