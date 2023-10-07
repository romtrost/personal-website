import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function ProjectsHeader2(props) {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (

    <div ref={ref} className='projects-item-header-2'>
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
    </div>

  );
}

export default ProjectsHeader2;
