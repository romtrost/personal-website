import React, { useRef }  from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import './HeroSection.css';
import ShootingStarGenerator from '../../ShootingStarGenerator';
import StaticStarGenerator from '../../StaticStarGenerator';

function HeroSection() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const background2Y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  console.log(backgroundY)
  console.log(textY)

  return (
    <section id='hero'>
      <div 
      ref={ref}
      className='hero-section'>
        <div className='hero-container'>
          <div className='transition-overlay'/>
          <motion.div className='hero-text-container'
                      style={{ 
                        zIndex: 10,
                        y: textY 
                      }}>
            <motion.h1  initial={{ y: 550, opacity: 0, scale: 1 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0.5,
                          ease: [0.1, 0.4, 0.2, 1.0]
                        }}>
                        HELLO! I'M
            </motion.h1>
            <motion.h2  initial={{ y: 550, opacity: 0, scale: 1 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0.55,
                          ease: [0.1, 0.4, 0.2, 1.0]
                        }}>
                        ROMAIN TROST
            </motion.h2>
            <motion.p initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 2,
                        ease: "easeOut"
                      }}>
                      A Data Scientist and Tech Enthusiast from Belgium
            </motion.p>
          </motion.div>
          <ShootingStarGenerator 
            backgroundY={backgroundY}
          />
          <StaticStarGenerator 
            backgroundY={backgroundY}
          />
          <motion.img
            src='/images/header-background.jpg'
            style={{
              y: backgroundY,
            }}
          />
          <motion.img
            src='/images/header-background-foreground-2.png'
            style={{
              zIndex: 5,
              y: background2Y,
            }}
          />
          <motion.img
            src='/images/header-background-foreground.png'
            style={{
              zIndex: 15,
            }}
          />
        </div>
      </div>
      <div className='hero-bottom'/>
    </section>
  );
}

export default HeroSection;
