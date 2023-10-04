import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

function AboutTool(props) {

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
                class="tool-container" style ={{width: props.width}}
                variants={{hidden: { y: 25, opacity: 0, scale: 1 }, visible: { y: 0, opacity: 1, scale: 1 },}}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 0.5, delay: props.delay, ease: [0.1, 0.4, 0.2, 1.0]}}>
                <p style ={{ fontWeight: 300}}>
                  {props.text}
                </p>
    </motion.div>
      
  );
}

export default AboutTool;
