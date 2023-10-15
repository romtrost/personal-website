import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faFile, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function AboutLinkItem(props) {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style ={{display: "flex", alignItems: "center"}}>
      <motion.div style={{color: "#ffffff", marginLeft: '10px'}}
                  variants={{hidden: { y: 25, opacity: 0, scale: 1 }, visible: { y: 0, opacity: 1, scale: 1 },}}
                  initial="hidden"
                  animate={mainControls}
                  transition={{duration: 0.5, delay: 0.3, ease: [0.1, 0.4, 0.2, 1.0]}}>
                  <FontAwesomeIcon icon={faArrowRight} size="xl"/>
      </motion.div>
      <motion.a className="linkIcon"
                  variants={{hidden: { y: 25, opacity: 0, scale: 1 }, visible: { y: 0, opacity: 1, scale: 1 },}}
                  initial="hidden"
                  animate={mainControls}
                  transition={{duration: 0.5, delay: 0.5, ease: [0.1, 0.4, 0.2, 1.0]}}
                  href="https://www.linkedin.com/in/romain-trost-9a3955197/">
                  <FontAwesomeIcon icon={faLinkedin} size="xl"/>
      </motion.a>
      <motion.a className="linkIcon"
                  variants={{hidden: { y: 25, opacity: 0, scale: 1 }, visible: { y: 0, opacity: 1, scale: 1 },}}
                  initial="hidden"
                  animate={mainControls}
                  transition={{duration: 0.5, delay: 0.6, ease: [0.1, 0.4, 0.2, 1.0]}}
                  href="https://github.com/romtrost">
                  <FontAwesomeIcon icon={faGithub} size="xl"/>
      </motion.a>
      <motion.a className="linkIcon"
                  variants={{hidden: { y: 25, opacity: 0, scale: 1 }, visible: { y: 0, opacity: 1, scale: 1 },}}
                  initial="hidden"
                  animate={mainControls}
                  transition={{duration: 0.5, delay: 0.7, ease: [0.1, 0.4, 0.2, 1.0]}}
                  href="mailto:romainltrost@hotmail.com">
                  <FontAwesomeIcon icon={faEnvelope} size="xl"/>
      </motion.a>
    </div>
  );
}

export default AboutLinkItem;
