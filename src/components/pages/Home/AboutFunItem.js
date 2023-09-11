import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import AboutTool from './AboutTool';

function AboutFunItem(props) {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{marginBottom: "50px"}}>
      <motion.div style = {{display: "flex", alignItems: "center", marginBottom: '14px'}}
                  variants={{hidden: { y: 25, opacity: 0, scale: 1 }, visible: { y: 0, opacity: 1, scale: 1 },}}
                  initial="hidden"
                  animate={mainControls}
                  transition={{duration: 0.5, delay: 0.3, ease: [0.1, 0.4, 0.2, 1.0]}}>
                  <FontAwesomeIcon icon={faFaceSmile} size="xl" style={{color: "#ff932e"}}/>
                  <p style ={{fontSize: '24px', fontWeight: 700, marginLeft: '10px'}}>
                  Use for fun
                  </p>
      </motion.div>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '14px'}}>
        <AboutTool text="Javascript"
                   width="110px"
                   delay="0.3"/>
        <AboutTool text="Typescript"
                   width="110px"
                   delay="0.4"/>
        <AboutTool text="HTML"
                   width="60px"
                   delay="0.5"/>
      </div>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '14px'}}>
        <AboutTool text="React"
                   width="70px"
                   delay="0.3"/>
        <AboutTool text="C & C++"
                   width="90px"
                   delay="0.4"/>
        <AboutTool text="C#"
                   width="50px"
                   delay="0.5"/>
        <AboutTool text="Unity"
                   width="60px"
                   delay="0.6"/>
      </div>
    </div>
  );
}

export default AboutFunItem;
