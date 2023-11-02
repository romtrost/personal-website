import React, { useRef }  from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import './MobileDisplay.css';
import ShootingStarGenerator from '../../ShootingStarGenerator';
import StaticStarGenerator from '../../StaticStarGenerator';

function MobileDisplay() {

  return (
      <div className='mobile-section'>
        <div className='mobile-container'>
        <ShootingStarGenerator/>
        <StaticStarGenerator/>
          <div className='transition-overlay'/>
          <motion.div className='mobile-text-container'
                      style={{ 
                        zIndex: 10,
                      }}>
            <motion.h1  initial={{ y: 550, opacity: 0, scale: 1 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0.5,
                          ease: [0.1, 0.4, 0.2, 1.0]
                        }}>
                        HELLO!
            </motion.h1>
            <motion.h2  initial={{ y: 550, opacity: 0, scale: 1 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0.55,
                          ease: [0.1, 0.4, 0.2, 1.0]
                        }}>
                        APOLOGIES...
            </motion.h2>
            <motion.p initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 2,
                        ease: "easeOut"
                      }}>
                      As of now, my design is tailored for desktop viewing. Please feel free to return and explore me on your computer!
            </motion.p>
          </motion.div>
          <motion.img
            src='/images/header-background-no-stars.jpg'
          />
          <motion.img
            src='/images/header-background-foreground-2.png'
            style={{
              zIndex: 5,
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
  );
}

export default MobileDisplay;
