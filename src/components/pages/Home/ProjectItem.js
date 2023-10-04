import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function ProjectItem(props) {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (

    <>
      <motion.div ref={ref}
        class="project-container"
        variants={{hidden: { y: 50, opacity: 0, scale: 1 }, visible: { y: 0, opacity: 1, scale: 1 },}}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.5, delay: props.delay, ease: [0.1, 0.4, 0.2, 1.0]}}>
        <motion.img
          src='/images/spotify.jpg'
          style={{
            width: '70%',
            borderRadius: '7px',
          }}
        />
      </motion.div> 
      <div className='projects-item-header-1'>
        <h2>Spotify Music Recommender</h2>
        <div className='projects-header-line'/>
        <div className="linkIcon-projects">
          <FontAwesomeIcon icon={faGithub} size="xl"/>
        </div>
      </div>
      <div className='projects-item-header-2'>
        <h2>Spotify API - Python - Numpy</h2>
      </div>
      <div className='projects-item-text'>
        <h2>
          A real-time coaching app for students learning to paint. 
          This app is my baby, designed and built on my own.
        </h2>          
        <h2 style={{color: '#ff932e', fontWeight: '400', fontSize: '16px'}}>
          Learn more <FontAwesomeIcon icon={faArrowRight} size="sm"/>
        </h2>   
      </div>
    </>

  );
}

export default ProjectItem;
