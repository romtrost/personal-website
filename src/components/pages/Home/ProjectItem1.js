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
        <ProjectsHeader1 text={props.name} 
                         link={props.link}/>
        <ProjectsHeader2 text={props.tools}/>
        <ProjectsText style={{marginTop: '25px'}}
                      text={props.description}
                      iconColor='transparent'/>
        <ProjectsText style={{color: '#ff932e', fontWeight: '400', fontSize: '16px'}}
                      text='Learn more '
                      iconColor='#ff932e'/>
      </div>
      <motion.div ref={ref} 
                  class="project-image-container"
                  variants={{
                    hidden: { 
                      y: 50, 
                      opacity: 0, 
                      scale: 1 
                    }, 
                    visible: { 
                      y: 0, 
                      opacity: 1, 
                      scale: 1, 
                      transition: {  
                        duration: 0.5, 
                        delay: 0.3, 
                        ease: [0.1, 0.4, 0.2, 1.0] 
                      } 
                    },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 5, 
                    transition: {  
                      ease: [0.1, 0.4, 0.2, 1.0] 
                    }
                  }}>
                  <motion.img
                    src={props.src}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '7px',
                    }}
                  />
      </motion.div> 
    </div>

  );
}

export default ProjectItem1;
