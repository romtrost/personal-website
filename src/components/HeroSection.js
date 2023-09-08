import React, { useRef }  from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import '../App.css';
import './HeroSection.css';
import Navbar from './Navbar';

function HeroSection() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const background2Y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  console.log(backgroundY)
  console.log(textY)

  return (
    
    <div 
    ref={ref}
    className='hero'>
      <Navbar />
      <div className='hero-container'>
        <motion.div className='hero-text-container'
                    style={{ 
                      zIndex: 10,
                      y: textY 
                    }}>
          <motion.h1  initial={{ y: 500, opacity: 0, scale: 1 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{
                        duration: 1,
                        delay: 0.3,
                        ease: [0.1, 0.4, 0.2, 1.0]
                      }}>
                      HELLO! I'M
          </motion.h1>
          <motion.h2  initial={{ y: 500, opacity: 0, scale: 1 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{
                        duration: 1,
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
        </motion.div>
        <motion.img
          src='/images/header-background.jpg'
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 0,
            y: backgroundY,
          }}
        />
        <motion.img
          src='/images/header-background-foreground-2.png'
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 5,
            y: background2Y,
          }}
        />
        <motion.img
          src='/images/header-background-foreground.png'
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 15,
          }}
        />
      </div>
    </div>
  );
}

export default HeroSection;
