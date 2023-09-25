import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

function ExperienceLine(props) {

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
                className='experience-seperator-line'
                variants={{
                  hidden: { scaleX: 0, transformOrigin: props.direction },
                  visible: { scaleX: 1, transformOrigin: props.direction },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{
                  duration: 0.5,
                  delay: props.delay,
                  ease: 'easeInOut'
                }}/>
  );
}

export default ExperienceLine;
