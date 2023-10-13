import React from 'react';
import '../../../App.css';
import Navbar from '../../Navbar';
import HeroSection from './HeroSection';
import ContentSection from './ContentSection';
import FooterSection from './FooterSection';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ContentSection />
      <FooterSection />
    </>
  );
}

export default Home;
