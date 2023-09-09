import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import './Cards.css';
import CardItem from './CardItem';

function Cards() {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (

    <div className='cards'>
      <section id='about' className='section-wrapper'>
        <div ref={ref} className='section-header' style={{flexDirection: 'row-reverse'}}>
          <motion.div className='section-header-line'
                      variants={{
                        hidden: { width: '0px' },
                        visible: { width: '100%' },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{
                        duration: 1,
                        ease: 'easeInOut'
                      }}></motion.div>
          <motion.h1  variants={{
                        hidden: { y: 25, opacity: 0, scale: 1 },
                        visible: { y: 0, opacity: 1, scale: 1 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{
                        duration: 0.5,
                        delay: 0.7,
                        ease: [0.1, 0.4, 0.2, 1.0]
                      }}>
                      About
          </motion.h1>
        </div> 
        <div className='section-content-about'>
          <div>
            <p className='section-about-text' style={{marginBottom: '24px'}}>
              Hey! I'm Bob, if you haven't already gathered that by now. 
              I'm a painter turned software engineer from Daytona, Florida. 
              I specialize in the backend, primarily Node and Rust, but love building with whatever tools are right for the job.
            </p>
            <p className='section-about-text' style={{marginBottom: '24px'}}>
              Hey! I'm Bob, if you haven't already gathered that by now. 
              I'm a painter turned software engineer from Daytona, Florida. 
              I specialize in the backend, primarily Node and Rust, but love building with whatever tools are right for the job.
            </p>
            <p className='section-about-text' style={{marginBottom: '24px'}}>
              Hey! I'm Bob, if you haven't already gathered that by now. 
              I'm a painter turned software engineer from Daytona, Florida. 
              I specialize in the backend, primarily Node and Rust, but love building with whatever tools are right for the job.
            </p>
            <p className='section-about-text' style={{marginBottom: '24px', fontWeight: 400, color: '#ff932e'}}>
              My links &#8594;
            </p> 
          </div>
        </div>
      </section>
      <section id='projects' className='section-wrapper'>
        <div className='section-header'>
          <div className='section-header-line'></div>
          <h1>Projects</h1>
        </div> 
        
      </section>
    </div>

    /*
    <div className='cards'>
      <h1>Check out my latest projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/react.jpg'
              text='Personal website (AKA the one you are on now!)'
              label='Web Development'
              path='https://github.com/romtrost/personal-website/tree/master'
            />
            <CardItem
              src='images/CNN.png'
              text='Music genre classifier using Convolutional Neural Networks'
              label='Deep Learning'
              path='https://github.com/romtrost/Music-Genre-Classification'
            />
          </ul>
        </div>
      </div>
    </div>
    */
  );
}

export default Cards;
