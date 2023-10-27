import React, { useEffect, useRef, useState }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import ProjectsHeader1 from './ProjectsHeader1';
import ProjectsHeader2 from './ProjectsHeader2';
import ProjectsSummary from './ProjectsSummary';
import ProjectsLearnMore from './ProjectsLearnMore';
import ProjectPopup from './ProjectPopup';

function ProjectItem2(props) {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation();

  const [buttonPopUp, setButtonPopPup] = useState(false);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (

    <div className='project-container'>
      <motion.div ref={ref} 
                  class="project-image-container"
                  onClick={() => setButtonPopPup(true)}
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
                    rotate: -5, 
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
      <div>
        <ProjectsHeader1 text={props.name}
                         link={props.link}/>
        <ProjectsHeader2 text={props.tools}/>
        <ProjectsSummary text={props.summary}/>
        <div onClick={() => setButtonPopPup(true)}>
          <ProjectsLearnMore/>
        </div>
        <ProjectPopup trigger={buttonPopUp}
                      setTrigger={setButtonPopPup}
                      rotate={[-5, 1, 0]}
                      src={props.src}
                      title={props.name}
                      tools={props.tools}
                      description1={props.description1}
                      description2={props.description2}
                      description3={props.description3}
                      link={props.link}/>
      </div>
    </div>

  );
}

export default ProjectItem2;
