import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

function ExperienceHeader1(props) {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div ref={ref} 
                className='experience-item-header-1'
                style={props.style}
                variants={{
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
      <h1>{props.company}</h1>
      <h2>{props.date}</h2>
    </motion.div>
  );
}

export default ExperienceHeader1;
