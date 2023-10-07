import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import AboutTool from './AboutTool';

function AboutToolItem(props) {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div style={{marginBottom: "50px"}}>
      <motion.div ref={ref}
                  style = {{display: "flex", alignItems: "center", marginBottom: '14px'}}
                  variants={{hidden: { y: 25, opacity: 0, scale: 1 }, visible: { y: 0, opacity: 1, scale: 1 },}}
                  initial="hidden"
                  animate={mainControls}
                  transition={{duration: 0.5, delay: 0.3, ease: [0.1, 0.4, 0.2, 1.0]}}>
                  <FontAwesomeIcon icon={faBriefcase} size="xl" style={{color: "#ff932e"}}/>
                  <p style ={{fontSize: '24px', fontWeight: 700, marginLeft: '10px'}}>
                    Use at work
                  </p>
      </motion.div>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '14px'}}>
        <AboutTool text="Python"
                   width="90px"
                   delay="0.3"/>
        <AboutTool text="SQL"
                   width="60px"
                   delay="0.4"/>
        <AboutTool text="GitHub"
                   width="90px"
                   delay="0.5"/>
        <AboutTool text="AWS"
                   width="70px"
                   delay="0.6"/>
      </div>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '14px'}}>
        <AboutTool text="Numpy"
                   width="80px"
                   delay="0.3"/>
        <AboutTool text="Scikit-Learn"
                   width="120px"
                   delay="0.4"/>
        <AboutTool text="Pandas"
                   width="90px"
                   delay="0.5"/>
      </div>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '14px'}}>
        <AboutTool text="Tensorflow"
                   width="130px"
                   delay="0.3"/>
        <AboutTool text="Pytorch"
                   width="100px"
                   delay="0.4"/>
        <AboutTool text="Jira"
                   width="60px"
                   delay="0.5"/>
      </div>
    </div>
  );
}

export default AboutToolItem;
