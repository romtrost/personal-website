import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import ExperienceHeader1 from './ExperienceHeader1';
import ExperienceHeader2 from './ExperienceHeader2';
import ExperienceText from './ExperienceText';
import ExperienceLine from './ExperienceLine';
import AboutTool from './AboutTool';

function ExperienceItemSchreder(props) {

  return (
    <div style={{marginBottom: '30px'}}>
      <ExperienceHeader1 company="Schréder"
                         date="Jul. 2020 - Aug. 2020"/>
      <ExperienceHeader2 style={{marginBottom: '24px'}}
                         title="Software Engineering Intern"
                         location="Liège"/>
      <div style={{marginLeft: '30px', marginBottom: '24px'}}> 
      <ExperienceText description="Led and managed the research, design, and testing process of the wireless communication 
                                   system for the company’s Flexia luminaires."/>
      <ExperienceText description="Implemented the software infrastructure that enabled luminaires to 
                                   communicate between each other and with other devices such as sensors."/>
      </div>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '24px'}}>
        <AboutTool text="C"
                   width="40px"
                   delay="0.3"/>
        <AboutTool text="C++"
                   width="60px"
                   delay="0.35"/>
        <AboutTool text="MATLAB"
                   width="85px"
                   delay="0.4"/>
        <AboutTool text="Github"
                   width="80px"
                   delay="0.45"/>
      </div>
      <ExperienceLine delay="0.0"/>
    </div>

  );
}

export default ExperienceItemSchreder;
