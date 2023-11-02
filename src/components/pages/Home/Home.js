import React, { useRef }  from 'react';
import { useScroll, useTransform } from "framer-motion";
import '../../../App.css';
import Navbar from '../../Navbar';
import HeroSection from './HeroSection';
import ContentSection from './ContentSection';
import FooterSection from './FooterSection';
import ShootingStarGenerator from '../../ShootingStarGenerator';
import StaticStarGenerator from '../../StaticStarGenerator';

function Home() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const starsY = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

  return (
    <div ref={ref}>
      <ShootingStarGenerator backgroundY={starsY}/>
      <StaticStarGenerator backgroundY={starsY}/>
      <Navbar />
      <HeroSection/>
      <ContentSection/>
      <FooterSection/>
    </div>
  );
}

export default Home;
