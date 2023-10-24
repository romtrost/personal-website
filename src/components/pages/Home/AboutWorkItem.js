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
    <div style={{marginBottom: "40px"}}>
      <motion.div ref={ref}
                  style = {{display: "flex", alignItems: "center", marginBottom: '14px'}}
                  variants={{hidden: { y: 25, opacity: 0, scale: 1 }, visible: { y: 0, opacity: 1, scale: 1 },}}
                  initial="hidden"
                  animate={mainControls}
                  transition={{duration: 0.5, delay: 0.3, ease: [0.1, 0.4, 0.2, 1.0]}}>
                  <FontAwesomeIcon icon={faBriefcase} size="xl" style={{color: "#ff932e", filter: 'drop-shadow(0px 0px 10px #ff932e)'}}/>
                  <p style ={{fontSize: '24px', fontWeight: 700, marginLeft: '10px'}}>
                    Use at work
                  </p>
      </motion.div>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '14px'}}>
        <AboutTool text="Python"
                   width="90px"
                   delay="0.3"/>
        <AboutTool text="SQL"
                   width="50px"
                   delay="0.4"/>
        <AboutTool text="GitLab"
                   width="70px"
                   delay="0.5"/>
        <AboutTool text="Docker"
                   width="80px"
                   delay="0.6"/>
      </div>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '14px'}}>
        <AboutTool text="Numpy"
                   width="90px"
                   delay="0.3"/>
        <AboutTool text="Scikit-learn"
                   width="115px"
                   delay="0.4"/>
        <AboutTool text="Pandas"
                   width="85px"
                   delay="0.5"/>
      </div>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '14px'}}>
        <AboutTool text="Pytorch"
                   width="100px"
                   delay="0.3"/>
        <AboutTool text="Jira"
                   width="60px"
                   delay="0.4"/>
        <AboutTool text="Jenkins"
                   width="80px"
                   delay="0.5"/>
        <AboutTool text="AWS"
                   width="60px"
                   delay="0.6"/>
      </div>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '14px'}}>
        <AboutTool text="SageMaker"
                    width="130px"
                    delay="0.3"/>
        <AboutTool text="Apache Airflow"
                    width="160px"
                    delay="0.4"/>        
      </div>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '14px'}}>
        <AboutTool text="Angular"
                   width="90px"
                   delay="0.3"/>
        <AboutTool text="Elasticsearch"
                   width="140px"
                   delay="0.4"/>
        <AboutTool text="JFrog"
                   width="65px"
                   delay="0.5"/>
      </div>
    </div>
  );
}

export default AboutToolItem;
