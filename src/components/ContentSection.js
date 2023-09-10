import React  from 'react';
import './ContentSection.css';
import ContentHeaderItem from './ContentHeaderItem';
import AboutTextItem from './AboutTextItem';

function ContentSection() {

  return (

    <div className='cards'>
      <section id='about' className='section-wrapper'>
        <div className='section-header' style={{flexDirection: 'row-reverse'}}>
            <ContentHeaderItem text="About"/>
        </div> 
        <div className='section-content-about'>
          <div>
            <AboutTextItem text="Hey! I'm Bob, if you haven't already gathered that by now. 
                                 I'm a painter turned software engineer from Daytona, Florida. 
                                 I specialize in the backend, primarily Node and Rust, but love building with whatever tools are right for the job."/>
            <AboutTextItem text="Hey! I'm Bob, if you haven't already gathered that by now. 
                                 I'm a painter turned software engineer from Daytona, Florida. 
                                 I specialize in the backend, primarily Node and Rust, but love building with whatever tools are right for the job."/>
            <AboutTextItem text="Hey! I'm Bob, if you haven't already gathered that by now. 
                                 I'm a painter turned software engineer from Daytona, Florida. 
                                 I specialize in the backend, primarily Node and Rust, but love building with whatever tools are right for the job."/>
            <p className='section-about-text' style={{marginBottom: '24px', fontWeight: 400, color: '#ff932e'}}>
              My links &#8594;
            </p> 
          </div>
        </div>
      </section>
      <section id='projects' className='section-wrapper'>
        <div className='section-header'>
            <ContentHeaderItem text="Projects"/>
        </div>
      </section>
      <section id='resume' className='section-wrapper'>
        <div className='section-header' style={{flexDirection: 'row-reverse'}}>
            <ContentHeaderItem text="Resume"/>
        </div>
      </section>
      <section id='contact' className='section-wrapper'>
        <div className='section-header'>
            <ContentHeaderItem text="Contact"/>
        </div>
      </section>
    </div>

    /*
    <div className='cards'>
      <h1>Check out my latest projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/react.jpg'
              text='Personal website (AKA the one you are on now!)'
              label='Web Development'
              path='https://github.com/romtrost/personal-website/tree/master'
            />
            <CardItem
              src='images/CNN.png'
              text='Music genre classifier using Convolutional Neural Networks'
              label='Deep Learning'
              path='https://github.com/romtrost/Music-Genre-Classification'
            />
          </ul>
        </div>
      </div>
    </div>
    */
  );
}

export default ContentSection;
