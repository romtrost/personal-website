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
                                      outperforming GPT-4 using standard prompting."/>
          <ProjectItem2 src='/images/projects/spotify_orange.png'
                        link='https://github.com/romtrost/Spotify-Music-Recommender-System'
                        name="Spotify Music Recommender"
                        tools="Python - Spotify API - Scikit-learn"
                        summary="A Spotify music recommender system which uses content-based filtering 
                                 to recommend songs based on a user's playlist. This project involved accessing 
                                 song data and features using Spotify's API."
                        description1="In this project, I developed a recommender system that takes a Spotify playlist as input 
                                      and suggests a curated selection of 5 songs based on the playlist's contents."
                        description2="I used a large Spotify song dataset, on which I conducted data sampling to eliminate underrepresented genres.
                                      Feature engineering was performed to extract relevant song attributes, which were then one-hot encoded to yield a data feature set.
                                      I then used the Spotify API to retrieve my own playlist, which I turned into a vector representative of its songs' features.
                                      Finally, I used this vector and cosine similarity to generate the 5 most similar songs from the data feature set."
                        description3="Upon analysis, the close resemblance of recommended songs to those in the playlist suggests strong performance by the content-based recommender system."/>
          <ProjectItem1 src='/images/projects/question_marks_1.png'
                        link='https://github.com/romtrost/Question-Word-Prediction'
                        name="Question Word Predictor"
                        tools="Python - BERT - Stanza"
                        summary="A Question Word Predictor capable of identifying the missing question word in a question-answer pair.
                                 This project involved fine-tuning BERT to the SQuAD dataset through multi-label text classification,
                                 with the final model achieving a 94% test accuracy."
                        description1="This project involved building a Question Word Predictor (QWP) able to identify the missing question word (QW) in a question-answer (QA) pair."
                        description2="I developed scripts to construct a distinct dataset, wherein I masked the QW in each QA pair sourced from the SQuAD dataset and assigned it as a label for that specific QA pair.
                                      After this, I preprocessed and cleaned the data using various techniques such as under-sampling. Next, I divided the dataset into train and test sets. 
                                      Subsequently, I imported a pre-trained BERT model and fine-tuned it for multi-label text classification using our training data, 
                                      where the model learned to associate each QW with its corresponding masked QA pair."
                        description3="The final model was able to achieve an impressive 94% accuracy on our test set."/>
          <ProjectItem2 src='/images/projects/music_notes_2.png'
                        link='https://github.com/romtrost/Music-Genre-Classification'
                        name="Music Genre Classifier"
                        tools="Python - PyTorch - TensorFlow - Librosa"
                        summary="A music genre classifier which utilizes mel spectrograms derived from audio samples as image features
                                 to train a deep Convolutional Neural Network (CNN). The resulting model is able to classify music genres with an accuracy of 92%."
                        description1="This project entailed creating a CNN classifier for audio music genre identification."
                        description2="We used the GTZAN dataset and preprocessed it by converting audio files into images using the librosa library to produce mel spectrograms and MFCCs from .wav files.
                                      Additionally, we employed variational autoencoders as an oversampling technique to create more audio samples. 
                                      For the core of our analysis, we implemented a CNN in TensorFlow, drawing inspiration from existing research papers to design the network architecture. 
                                      This CNN was then trained using an Adam optimizer for hyperparameter optimization, with a focus on achieving the best model fit, using a sparse categorical cross-entropy loss function."
                        description3="The CNN trained on 3-channel mel spectrograms achieved an accuracy of 92%."/>
          <ProjectItem1 src='/images/projects/computers.png'
                        link='https://github.com/romtrost/personal-website'
                        name="Personal Website"
                        tools="JavaScript - HTML - React - DALL·E 2"
                        summary="My personal website, which you happen to be scrolling through right now!"
                        description1="In this side project, I develop my own website to showcase my other projects, and provide other relevant information about me and my background."
                        description2="I built the entire website from the ground up using the React framework, extensively working with JavaScript, HTML, and CSS. 
                                      While drawing inspiration from other websites, I aimed to give my website a unique and cohesive theme by generating all its images using DALL·E 2.
                                      Additionally, I incorporated the Framer Motion library to add captivating animations to the various web components, enhancing the website's interactivity and liveliness."
                        description3="This website remains a continuous work in progress, as I intend to further refine my web development skills and feature new, exciting projects."/>
          <ProjectItem2 src='/images/projects/CPUs.png'
                        link='https://github.com/romtrost/CPU-simulation'
                        name="CPU Simulator"
                        tools="C - MIPS - Hardware Design"
                        summary="A 32 bit instruction CPU simulator built entirely using C and MIPS assembly code. The CPU is based on the Von Neumann architecture."           
                        description1="The aim of this project was to create a C program simulating the operation of a 32-bit instruction Von Neumann architecture CPU."
                        description2="I wrote code to simulate every component of a CPU. 
                                      This involved creating the low-level functionality of the Control Unit, responsible for fetching and decoding 32-bit instructions. 
                                      I also designed functions to enable CPU registers to store and fetch from memory the required bits needed for future computations. 
                                      Additionally, I implemented an Arithmetic Logic Unit function to carry out bit-level computations."
                        description3="Crafting and executing tasks like squaring numbers and finding prime numbers within a specified range using a stream of 32-bit instructions demonstrated the program's intended performance."/>                       
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
