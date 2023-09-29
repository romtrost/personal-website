import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function ContactEmail(props) {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (

    <div ref={ref} 
        className='contact-email'
         style ={{
           display: "flex", 
           alignItems: "center",
           justifyContent: 'center',
           marginTop: '30px'}}>
      <motion.div variants={{hidden: { y: 25, opacity: 0, scale: 1 }, visible: { y: 0, opacity: 1, scale: 1 },}}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    duration: 0.5, 
                    delay: 0.3, 
                    ease: [0.1, 0.4, 0.2, 1.0]}}>
                  <FontAwesomeIcon icon={faEnvelope} size="xl" />
      </motion.div>
      <motion.div style={{
                marginLeft: '10px',
                fontWeight: '400',
                fontSize: '20px'
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
                romainltrost@hotmail.com
      </motion.div>
    </div>



  );
}

export default ContactEmail;
