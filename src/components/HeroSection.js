import React from 'react';
import {motion} from 'framer-motion'
import '../App.css';
import './HeroSection.css';
import Navbar from './Navbar';

function HeroSection() {
  return (
    <div className='hero'>
      <img src='/images/header-background.jpg'  />
      <Navbar />
      <div className='hero-container'>
        <motion.h1  initial={{ y: 70, opacity: 0, scale: 1 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3,
                      ease: [0.1, 0.4, 0.2, 1.0]
                    }}>
                    HELLO! I'M
        </motion.h1>
        <motion.h2  initial={{ y: 70, opacity: 0, scale: 1 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      ease: [0.1, 0.4, 0.2, 1.0]
                    }}>
          ROMAIN TROST
        </motion.h2>
        <motion.p initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.8,
                    ease: "easeOut"
                  }}>
          A Data Scientist and Tech Enthusiast from Belgium
        </motion.p>
      </div>
    </div>

  );
}

export default HeroSection;
