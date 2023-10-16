import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function ProjectsHeader1(props) {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (

    <div ref={ref} className='projects-item-header-1'>
      <motion.h2  variants={{
                    hidden: { y: 25, opacity: 0, scale: 1 },
                    visible: { y: 0, opacity: 1, scale: 1 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease: [0.1, 0.4, 0.2, 1.0]
                  }}>
                    {props.text}
      </motion.h2>
      <motion.div className='projects-header-line'
                  variants={{
                    hidden: { scaleX: 0, transformOrigin: 'left' },
                    visible: { scaleX: 1, transformOrigin: 'left' },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    duration: 0.3,
                    delay: 0.4,
                    ease: 'easeInOut'
                  }}/>
      <motion.a className="linkIcon-projects"
                href={props.link}
                  variants={{
                    hidden: { y: 25, opacity: 0, scale: 1 },
                    visible: { y: 0, opacity: 1, scale: 1 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    ease: [0.1, 0.4, 0.2, 1.0]
                  }}>
                    <FontAwesomeIcon icon={faGithub} size="xl"/>
      </motion.a>
    </div>

  );
}

export default ProjectsHeader1;
