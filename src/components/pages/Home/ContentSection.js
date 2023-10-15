import React  from 'react';
import './ContentSection.css';
import ContentHeaderItem from './ContentHeaderItem';
import AboutTextItem from './AboutTextItem';
import AboutLinkItem from './AboutLinkItem';
import AbouWorkItem from './AboutWorkItem';
import AboutFunItem from './AboutFunItem';
import ProjectItem1 from './ProjectItem1';
import ProjectItem2 from './ProjectItem2';
import ExperienceItem from './ExperienceItem';
import ContactItem from './ContactItem';

function ContentSection() {

  return (

    <div className='content-section'>
      <section id='about' className='section-wrapper'>
        <div className='section-header'>
            <ContentHeaderItem text="ABOUT" direction='right'/>
        </div> 
        <div className='section-content-about'>
          <div>
            <AboutTextItem style={{marginBottom: '24px'}} text="Hey! I'm Romain, a data scientist and tech enthusiast from Belgium. 
                                                                I have a deep passion for creating software and specialize in developping Machine Learning solutions for targeted applications."/>
            <AboutTextItem style={{marginBottom: '24px'}} text="I currently work for Ericsson, where I primarily focus on building predictive AI models designed for forecasting and detecting anomalies in 5G network data."/>
            <AboutTextItem style={{marginBottom: '24px'}} text="Outside of work, I love keeping up to date with all the latest advancements in AI.
                                                                I also enjoy learning new tools and creating other types of software. 
                                                                Recently, I've developed a strong passion for web development, hence the reason you are able to read this now!
                                                                Finally (and perhaps more importantly...), I'm a huge football fan! &#x26BD;"/>
            <AboutTextItem style={{marginBottom: '24px'}} text="I'm constantly on the lookout for captivating prospects that allow me to combine my passion for AI and software development. 
                                                                If you come across any opportunities that match my interests, I'd love to connect!"/>
            <div style ={{marginBottom: '24px', display: "flex", alignItems: "center"}}>
              <AboutTextItem style={{fontWeight: 500, color: '#ffffff'}} text="My links"/>
              <AboutLinkItem/>
            </div>
          </div>
          <div>
            <AbouWorkItem/>
            <AboutFunItem/>
          </div>
        </div>
      </section>
      <section id='projects' className='section-wrapper'>
        <div className='section-header' style={{flexDirection: 'row-reverse'}}>
          <ContentHeaderItem text="PROJECTS" direction='left'/>
        </div>
        <div className='section-content-projects'>
          <ProjectItem1 name="Spotify Music Recommender"
                        tools="Spotify API - Python - Numpy"
                        description="A real-time coaching app for students learning to paint. 
                                     This app is my baby, designed and built on my own.
                                     A real-time coaching app for students learning to paint. 
                                     This app is my baby, designed and built on my own."/>
          <ProjectItem2 name="Spotify Music Recommender"
                        tools="Spotify API - Python - Numpy"
                        description="A real-time coaching app for students learning to paint. 
                                     This app is my baby, designed and built on my own.
                                     A real-time coaching app for students learning to paint. 
                                     This app is my baby, designed and built on my own."/>
          <ProjectItem1 name="Spotify Music Recommender"
                        tools="Spotify API - Python - Numpy"
                        description="A real-time coaching app for students learning to paint. 
                                     This app is my baby, designed and built on my own.
                                     A real-time coaching app for students learning to paint. 
                                     This app is my baby, designed and built on my own."/>                                 
        </div>
      </section>
      <section id='experience' className='section-wrapper'>
        <div className='section-header'>
            <ContentHeaderItem text="EXPERIENCE" direction='right'/>
        </div>
        <div className='section-content-experience'>
          <ExperienceItem style={{marginBottom: '14px'}}
                          company="Ericsson"
                          date="Nov. 2022 - Present"
                          title="Data Scientist"
                          location="Stockholm"
                          description="Hey! I'm Bob, if you haven't already gathered that by now. 
                                       I'm a painter turned software engineer from Daytona, Florida. 
                                       I specialize in the backend, primarily Node and Rust, but love building with whatever tools are right for the job."/>
          <ExperienceItem style={{marginBottom: '14px'}}
                          company="Axfood"
                          date="Jun. 2022 - Oct. 2022"
                          title="Data Science Intern"
                          location="Stockholm"
                          description="Hey! I'm Bob, if you haven't already gathered that by now. 
                                       I'm a painter turned software engineer from Daytona, Florida. 
                                       I specialize in the backend, primarily Node and Rust, but love building with whatever tools are right for the job."/>
          <ExperienceItem style={{marginBottom: '14px'}}
                          company="Schréder"
                          date="Jul. 2020 - Aug. 2020"
                          title="Software Engineering Intern"
                          location="Liège"
                          description="Hey! I'm Bob, if you haven't already gathered that by now. 
                                       I'm a painter turned software engineer from Daytona, Florida. 
                                       I specialize in the backend, primarily Node and Rust, but love building with whatever tools are right for the job."/>
        </div>
      </section>
      <section id='contact' className='section-wrapper' style={{paddingTop: '28rem', paddingBottom: '0vh'}}>
        <div className='section-header' style={{flexDirection: 'row-reverse'}}>
            <ContentHeaderItem text="CONTACT" direction='left'/>
        </div>
        <div className='section-content-contact'>
        <ContactItem />
        </div>
      </section>
    </div>

  );
}

export default ContentSection;
