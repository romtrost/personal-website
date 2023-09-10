import React  from 'react';
import './ContentSection.css';
import ContentHeaderItem from './ContentHeaderItem';
import AboutTextItem from './AboutTextItem';

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
            <AboutTextItem style={{marginBottom: '24px', fontWeight: 400, color: '#ff932e'}} text="My links &#8594;"/>
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
