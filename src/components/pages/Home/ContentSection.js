import React  from 'react';
import './ContentSection.css';
import ContentHeaderItem from './ContentHeaderItem';
import AboutTextItem from './AboutTextItem';
import AboutLinkItem from './AboutLinkItem';
import AbouWorkItem from './AboutWorkItem';
import AboutFunItem from './AboutFunItem';
import ProjectItem1 from './ProjectItem1';
import ProjectItem2 from './ProjectItem2';
import ExperienceItemEricsson from './ExperienceItemEricsson';
import ExperienceItemAxfood from './ExperienceItemAxfood';
import ExperienceItemSchreder from './ExperienceItemSchreder';
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
                                                                I have a deep passion for creating software and specialize in developing machine learning solutions for targeted applications."/>
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
          <ProjectItem1 src='/images/projects/coins.png'
                        link='https://github.com/romtrost/LLMs-in-banking'
                        name="LLMs in Banking"
                        tools="Python - OpenAI API - Transformers "
                        summary="A collaborative initiative with SEB, Sweden's largest bank, 
                                     aimed at enhancing the performance and efficiency of Large Language Models (LLMs) 
                                     for addressing complex questions that require advanced reasoning capabilities."
                        description1="The focus of this project was to provide SEB with a solution that enabled LLMs to solve
                                      complex reasoning problems while mitigating the high costs that are often associated with LLM API requests."
                        description2="Specifically, we implemented and combined two frameworks: Chain of Thought (CoT) and FrugalGPT. 
                                      CoT facilitates LLMs in handling complex tasks by breaking down input prompts into multiple steps
                                      while FrugalGPT enables dynamic selection among different OpenAI LLMs to optimize both performance and cost."
                      description3="Our implementation demonstrated enhanced accuracy and cost reduction when assessed on various benchmark datasets taken from BIG-Bench Hard, 
                                    outperforming GPT-4 using standard prompting." />
          <ProjectItem2 src='/images/projects/spotify_orange.png'
                        link='https://github.com/romtrost/Spotify-Music-Recommender-System'
                        name="Spotify Music Recommender"
                        tools="Python - Spotify API - Scikit-learn"
                        summary="A Spotify music recommender system which uses content-based filtering 
                                     to recommend songs based on a user's playlist. This project involved accessing 
                                     song data and features using Spotify's API."/>
          <ProjectItem1 src='/images/projects/question_marks_1.png'
                        link='https://github.com/romtrost/Question-Word-Prediction'
                        name="Question Word Predictor"
                        tools="Python - TensorFlow - BERT - Stanza"
                        summary="A Question Word Predictor (QWP) capable of identifying the missing question word in a question-answer pair.
                                     This project involved fine-tuning BERT to the SQuAD dataset through multi-label text classification,
                                     with the model achieving a 94% classification accuracy."/>
          <ProjectItem2 src='/images/projects/music_notes_2.png'
                        link='https://github.com/romtrost/Music-Genre-Classification'
                        name="Music Genre Classifier"
                        tools="Python - PyTorch - Librosa"
                        summary="A music genre classifier which utilizes mel spectrograms derived from audio samples as image features
                                     to train a deep Convolutional Neural Network (CNN). The resulting model is able to classify music genres with an accuracy of 92%."/>
          <ProjectItem1 src='/images/projects/computers.png'
                        link='https://github.com/romtrost/personal-website'
                        name="Personal Website"
                        tools="JavaScript - HTML - React - DALL·E 2"
                        summary="My personal website, which you happen to be scrolling through right now!."/>
          <ProjectItem2 src='/images/projects/CPUs.png'
                        link='https://github.com/romtrost/CPU-simulation'
                        name="CPU Simulator"
                        tools="C - MIPS - Hardware Design"
                        summary="A 32 bit instruction CPU simulator built entirely using C and MIPS assembly code. 
                                     The CPU is based on the Von Neumann architecture."/>                                  
        </div>
      </section>
      <section id='experience' className='section-wrapper' style={{paddingBottom: '4.8rem'}}>
        <div className='section-header'>
            <ContentHeaderItem text="EXPERIENCE" direction='right'/>
        </div>
        <div className='section-content-experience'>
          <ExperienceItemEricsson/>
          <ExperienceItemAxfood/>
          <ExperienceItemSchreder/>
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
