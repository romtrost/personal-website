import React, { useEffect, useRef }  from 'react';
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
      <div className='project-pop-up-inner'>
        <div className='close-button' onClick={() => props.setTrigger(false)}>
          <FontAwesomeIcon icon={faTimes} size="l"/>
        </div>
        <div className='project-pop-up-image'>
          <img src={props.src}/>
        </div>
        <div className='project-pop-up-text'>
          <h2>
            {props.title}
          </h2>
          <h3>
            {props.tools}
          </h3>
          <h4>
            {props.description1}
          </h4>
          <h4>
            {props.description2}
          </h4>
          <div className='link-section'>
            <FontAwesomeIcon icon={faGithub} size="l"/>
            <a className='link-text' href={props.link}>
              source code
            </a>
          </div>
          
        </div>
        {props.children}
      </div>
    </div>

  ) : null;
}

export default ProjectPopup;
