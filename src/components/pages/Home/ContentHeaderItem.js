import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

function ContentHeaderItem(props) {

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
      <motion.h1  variants={{
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
      </motion.h1>
      <motion.div ref={ref}
                  className='section-header-line'
                  variants={{
                    hidden: { scaleX: 0, transformOrigin: props.direction },
                    visible: { scaleX: 1, transformOrigin: props.direction },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    duration: 0.5,
                    delay: 0.0,
                    ease: 'easeInOut'
      }}></motion.div>
    </>

  );
}

export default ContentHeaderItem;
