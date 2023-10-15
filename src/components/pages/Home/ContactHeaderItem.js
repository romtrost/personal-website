import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

function ContactHeaderItem(props) {

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
                  className='section-header-line'
                  variants={{
                    hidden: { scaleX: 0, transformOrigin: 'right' },
                    visible: { scaleX: 1, transformOrigin: 'right' },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    duration: 0.5,
                    delay: 0.0,
                    ease: 'easeInOut'
                  }}/>
      <motion.h1  style={{fontSize: '77px',
                          letterSpacing: '6px',
                  }}
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
                  CONTACT
      </motion.h1>
      <motion.div ref={ref}
            className='section-header-line'
            variants={{
              hidden: { scaleX: 0, transformOrigin: 'left' },
              visible: { scaleX: 1, transformOrigin: 'left' },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 0.5,
              delay: 0.0,
              ease: 'easeInOut'
            }}/>
    </>

  );
}

export default ContactHeaderItem;
