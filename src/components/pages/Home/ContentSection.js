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
import ContactHeaderItem from './ContactHeaderItem';
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
                                                                I have a deep passion for creating software and specialize in developping machine learning solutions for targeted applications."/>
            <AboutTextItem style={{marginBottom: '24px'}} text="I currently work for Ericsson, where I mainly focus on building predictive AI models designed for forecasting and detecting anomalies in 5G network data.
                                                                Through this work, I've co-authored and filed a patent application for an innovative approach to mobile traffic prediction."/>
            <AboutTextItem style={{marginBottom: '24px'}} text="Outside of work, I love keeping myself up to date with all the latest advancements in AI.
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
          <ProjectItem1 src='/images/spotify.jpg'
                        link='https://github.com/romtrost/Spotify-Music-Recommender-System'
                        name="Spotify Music Recommender"
                        tools="Python - Spotipy - Scikit-learn"
                        description="A Spotify music recommender system which uses content-based filtering 
                                     to recommend songs based on a user's playlist. This project involved accessing 
                                     song data and features using Spotify's API."/>
          <ProjectItem2 src='/images/question.png'
                        link='https://github.com/romtrost/Question-Word-Prediction'
                        name="Question Word Predictor"
                        tools="Python - TensorFlow - BERT - Stanza"
                        description="A Question Word Predictor (QWP) capable of identifying the missing question word in a question-answer pair.
                                     This project involved fine-tuning BERT to the SQuAD dataset through multi-label text classification,
                                     with the model achieving a 94% classification accuracy."/>
          <ProjectItem1 src='/images/music.png'
                        link='https://github.com/romtrost/Music-Genre-Classification'
                        name="Music Genre Classifier"
                        tools="Python - PyTorch - Librosa"
                        description="A music genre classifier which utilizes mel spectrograms derived from audio samples as image features
                                     to train a deep Convolutional Neural Network (CNN). The resulting model is able to classify music genres with an accuracy of 92%."/>
          <ProjectItem2 src='/images/website.png'
                        link='https://github.com/romtrost/personal-website'
                        name="Personal Website"
                        tools="JavaScript - HTML - ReactJS"
                        description="My personal website, which you happen to be scrolling through right now!."/>
          <ProjectItem1 src='/images/cpu.png'
                        link='https://github.com/romtrost/CPU-simulation'
                        name="CPU Simulator"
                        tools="C - MIPS - Hardware Design"
                        description="A 32 bit instruction CPU simulator built entirely using C and MIPS assembly code. 
                                     The CPU is based on the Von Neumann architecture."/>                                  
        </div>
      </section>
      <section id='experience' className='section-wrapper' style={{paddingBottom: '4.8rem'}}>
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
      <section id='contact' className='section-wrapper' style={{paddingTop: '24rem', paddingBottom: '0'}}>
        <div className='section-header' style={{flexDirection: 'row-reverse'}}>
            <ContactHeaderItem/>
        </div>
        <div className='section-content-contact'>
        <ContactItem/>
        </div>
      </section>
    </div>

  );
}

export default ContentSection;
