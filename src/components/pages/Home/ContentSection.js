import React  from 'react';
import './ContentSection.css';
import ContentHeaderItem from './ContentHeaderItem';
import AboutTextItem from './AboutTextItem';
import AboutLinkItem from './AboutLinkItem';
import AbouWorkItem from './AboutWorkItem';
import AboutFunItem from './AboutFunItem';
import ExperienceItem from './ExperienceItem';
import ContactItem from './ContactItem';

function ContentSection() {

  return (

    <div className='content-section'>
      <section id='about' className='section-wrapper' style={{marginTop: '9.6rem'}}>
        <div className='section-header'>
            <ContentHeaderItem text="ABOUT" direction='right'/>
        </div> 
        <div className='section-content-about'>
          <div>
            <AboutTextItem style={{marginBottom: '24px'}} text="Hey! I'm Bob, if you haven't already gathered that by now. 
                                                                I'm a painter turned software engineer from Daytona, Florida. 
                                                                I specialize in the backend, primarily Node and Rust, but love building with whatever tools are right for the job."/>
            <AboutTextItem style={{marginBottom: '24px'}} text="Hey! I'm Bob, if you haven't already gathered that by now. 
                                                                I'm a painter turned software engineer from Daytona, Florida. 
                                                                I specialize in the backend, primarily Node and Rust, but love building with whatever tools are right for the job."/>
            <AboutTextItem style={{marginBottom: '24px'}} text="Hey! I'm Bob, if you haven't already gathered that by now. 
                                                                I'm a painter turned software engineer from Daytona, Florida. 
                                                                I specialize in the backend, primarily Node and Rust, but love building with whatever tools are right for the job."/>
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
        <div className='section-content-experience'>

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
      <section id='contact' className='section-wrapper'>
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
