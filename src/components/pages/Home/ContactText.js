import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

function ContactText(props) {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (

    
    <motion.p ref={ref}
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
              Reach out by <span style={{color: '#ff932e', fontWeight: '400'}}>email</span> if you want to connect! 
              You can also find me on <span style={{color: '#ff932e', fontWeight: '400'}}>Linkedin</span> you prefer.
    </motion.p>
    



  );
}

export default ContactText;
