import React  from 'react';
import './ContentSection.css';
import ContentHeaderItem from './ContentHeaderItem';
import AboutTextItem from './AboutTextItem';
import AboutLinkItem from './AboutLinkItem';
import AbouWorkItem from './AboutWorkItem';
import AboutFunItem from './AboutFunItem';

function ContentSection() {

  return (

    <div className='content-section'>
      <section id='about' className='section-wrapper'>
        <div className='section-header'>
            <ContentHeaderItem text="About" direction='right'/>
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
            <ContentHeaderItem text="Projects" direction='left'/>
        </div>
      </section>
      <section id='resume' className='section-wrapper'>
        <div className='section-header'>
            <ContentHeaderItem text="Resume" direction='right'/>
        </div>
      </section>
      <section id='contact' className='section-wrapper'>
        <div className='section-header' style={{flexDirection: 'row-reverse'}}>
            <ContentHeaderItem text="Contact" direction='left'/>
        </div>
      </section>
    </div>

  );
}

export default ContentSection;
