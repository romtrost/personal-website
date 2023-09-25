import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import ExperienceHeader1 from './ExperienceHeader1';
import ExperienceHeader2 from './ExperienceHeader2';
import ExperienceText from './ExperienceText';
import ExperienceLine from './ExperienceLine';
import AboutTool from './AboutTool';

function ExperienceItem(props) {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div style={{marginBottom: '30px'}}>
      <ExperienceHeader1 company={props.company} 
                         date={props.date}/>
      <ExperienceHeader2 style={{marginBottom: '24px'}}
                         title={props.title} 
                         location={props.location}/>
      <ExperienceText    style={{marginBottom: '14px'}}
                         description={props.description}/>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '24px'}}>
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
      <ExperienceLine delay="0.0"/>
    </div>

  );
}

export default ExperienceItem;
