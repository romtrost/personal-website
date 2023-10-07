import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import ProjectsHeader1 from './ProjectsHeader1';
import ProjectsHeader2 from './ProjectsHeader2';
import ProjectsText from './ProjectsText';

function ProjectItem1(props) {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (

    <div className='project-container'>
      <div>
        <ProjectsHeader1 text={props.name}/>
        <ProjectsHeader2 text={props.tools}/>
        <ProjectsText style={{marginTop: '30px'}}
                      text={props.description}
                      iconColor='transparent'/>
        <ProjectsText style={{color: '#ff932e', fontWeight: '400', fontSize: '16px'}}
                      text='Learn more '
                      iconColor='#ff932e'/>
      </div>
      <motion.div class="project-image-container"
                  variants={{
                    hidden: { y: 50, opacity: 0, scale: 1 }, 
                    visible: { y: 0, opacity: 1, scale: 1 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    duration: 0.5, 
                    delay: 0.3, 
                    ease: [0.1, 0.4, 0.2, 1.0]}}>
                  <motion.img
                    src='/images/spotify.jpg'
                    style={{
                      width: '70%',
                      borderRadius: '7px',
                    }}
                  />
      </motion.div> 
      <div ref={ref}/>
    </div>

  );
}

export default ProjectItem1;
