import React, { useEffect }  from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './ProjectPopup.css';

function ProjectPopup(props) {

  useEffect(() => {
    if (props.trigger) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up the event listener
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [props.trigger]);

  return (props.trigger) ? (

    <div className='project-pop-up'>
      <div className='close-button' onClick={() => props.setTrigger(false)}>
        <FontAwesomeIcon icon={faTimes} size="l"/>
      </div>
      <motion.div 
        className='project-pop-up-inner'
        animate={{
          rotate: props.rotate, 
        }}
        transition={{  
          duration: 0.5, 
          ease: [0.1, 0.4, 0.2, 1.0] 
        }}>
        <div className='project-pop-up-image'>
          <img src={props.src}/>
        </div>
        <div className='project-pop-up-text'>
          <motion.h2  initial={{ y: 50, opacity: 0, scale: 1 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1,
                        ease: [0.1, 0.4, 0.2, 1.0]
                      }}>
            {props.title}
          </motion.h2>
          <motion.h3  initial={{ y: 50, opacity: 0, scale: 1 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15,
                        ease: [0.1, 0.4, 0.2, 1.0]
                      }}>
            {props.tools}
          </motion.h3>
          <motion.h4  initial={{ y: 50, opacity: 0, scale: 1 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2,
                        ease: [0.1, 0.4, 0.2, 1.0]
                      }}>
            {props.description1}
          </motion.h4>
          <motion.h4  initial={{ y: 50, opacity: 0, scale: 1 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.25,
                        ease: [0.1, 0.4, 0.2, 1.0]
                      }}>
            {props.description2}
          </motion.h4>
          <motion.div className='link-section'
                      initial={{ y: 50, opacity: 0, scale: 1 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3,
                        ease: [0.1, 0.4, 0.2, 1.0]
                      }}>
            <FontAwesomeIcon icon={faGithub} size="l"/>
            <a className='link-text' href={props.link}>
              source code
            </a>
          </motion.div>
          
        </div>
        {props.children}
      </motion.div>
    </div>

  ) : null;
}

export default ProjectPopup;
