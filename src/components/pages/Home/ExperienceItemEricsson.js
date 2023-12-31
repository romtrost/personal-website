import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import ExperienceHeader1 from './ExperienceHeader1';
import ExperienceHeader2 from './ExperienceHeader2';
import ExperienceText from './ExperienceText';
import ExperienceLine from './ExperienceLine';
import AboutTool from './AboutTool';

function ExperienceItemEricsson(props) {

  return (
    <div style={{marginBottom: '30px'}}>
      <ExperienceHeader1 company="Ericsson"
                         date="Nov. 2022 - Present"/>
      <ExperienceHeader2 style={{marginBottom: '24px'}}
                         title="Data Scientist"
                         location="Stockholm"/>
      <div style={{marginLeft: '30px', marginBottom: '24px'}}> 
      <ExperienceText description="Pioneered cutting-edge Time-Series Transformer architectures to forecast cellular traffic in 4G/5G networks, 
                                   surpassing conventional methods (LSTM/CNN) in both prediction accuracy and training time."/>
      <ExperienceText description="Co-authored and filed a patent application for an innovative approach to mobile traffic prediction."/>
      {/* 
      <ExperienceText description="Designed, built and benchmarked numerous deep learning forecasting models based on recent 
                                   research papers using real-world telecom time series data."/>      
      */}
      <ExperienceText description="Engineered a machine learning LSTM-based tool able to automatically detect anomalies within 
                                   system log text data, designed to streamline and expedite code troubleshooting.
                                   Additionally, built a website interface and dashboard to enable developers and troubleshooters to use 
                                   the tool effectively."/>
      <ExperienceText description="Integrated my contributions into the company's MLOps infrastructure as well-structured pipelines."/>
      <ExperienceText description="Worked as part of a global and diverse Data Science team, fostering international collaboration."/>
      </div>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '24px'}}>
        <AboutTool text="Python"
                   width="80px"
                   delay="0.3"/>
        <AboutTool text="PyTorch"
                   width="90px"
                   delay="0.35"/>
        <AboutTool text="GitLab"
                   width="70px"
                   delay="0.4"/>
        <AboutTool text="Docker"
                   width="80px"
                   delay="0.45"/>
        <AboutTool text="Angular"
                   width="85px"
                   delay="0.5"/>
        <AboutTool text="HTML"
                   width="60px"
                   delay="0.55"/>
        <AboutTool text="TypeScript"
                   width="110px"
                   delay="0.6"/>
        <AboutTool text="Jenkins"
                   width="80px"
                   delay="0.65"/>
        <AboutTool text="Elasticsearch"
                   width="140px"
                   delay="0.7"/>
        <AboutTool text="JFrog"
                   width="70px"
                   delay="0.75"/>
      </div>
      <ExperienceLine delay="0.0"/>
    </div>

  );
}

export default ExperienceItemEricsson;
