import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import ExperienceHeader1 from './ExperienceHeader1';
import ExperienceHeader2 from './ExperienceHeader2';
import ExperienceText from './ExperienceText';
import ExperienceLine from './ExperienceLine';
import AboutTool from './AboutTool';

function ExperienceItemAxfood(props) {

  return (
    <div style={{marginBottom: '30px'}}>
      <ExperienceHeader1 company="Axfood"
                         date="Jun. 2022 - Oct. 2022"/>
      <ExperienceHeader2 style={{marginBottom: '24px'}}
                         title="Data Science Intern" 
                         location="Stockholm"/>
      <div style={{marginLeft: '30px', marginBottom: '24px'}}> 
      <ExperienceText description="Proposed, developed and evaluated predictive models and recommendation engines to solve diverse business problems, 
                                   collaborating with machine learning experts, data engineers and business developers."/>
      <ExperienceText description="Wrote and deployed production level code to refactor and optimize the performance of 
                                   various data models used in Hemköp and Willys e-commerce."/>
      <ExperienceText description="Documented ML models and their complete workflows to address business driven needs and prospects."/>
      </div>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '24px'}}>
        <AboutTool text="Python"
                   width="80px"
                   delay="0.3"/>
        <AboutTool text="SQL"
                   width="50px"
                   delay="0.35"/>
        <AboutTool text="Scikit-learn"
                   width="115px"
                   delay="0.4"/>
        <AboutTool text="BitBucket"
                   width="100px"
                   delay="0.45"/>
        <AboutTool text="SageMaker"
                    width="120px"
                    delay="0.5"/>
        <AboutTool text="AWS"
                   width="60px"
                   delay="0.55"/>
        <AboutTool text="Confluence"
                   width="120px"
                   delay="0.6"/>
        <AboutTool text="MongoDB"
                   width="100px"
                   delay="0.65"/>
        <AboutTool text="Apache Airflow"
                   width="150px"
                   delay="0.7"/>
        <AboutTool text="Jira"
                   width="50px"
                   delay="0.75"/>
      </div>
      <ExperienceLine delay="0.0"/>
    </div>

  );
}

export default ExperienceItemAxfood;
