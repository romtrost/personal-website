import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

function AboutToolItem(props) {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div style={{marginBottom: "50px"}}>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '14px'}}>
        <FontAwesomeIcon icon={faBriefcase} size="xl" style={{color: "#ff932e"}}/>
        <p style ={{fontSize: '24px', fontWeight: 700, marginLeft: '10px'}}>
          Use at work
        </p>
      </div>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '14px'}}>
        <div class="oval-container" style ={{width: '80px'}} >
          <p style ={{ fontWeight: 300}}>
            Python
          </p>
        </div>
        <div class="oval-container" style ={{width: '50px'}} >
          <p style ={{fontWeight: 300}}>
            SQL
          </p>
        </div>
        <div class="oval-container" style ={{width: '75px'}} >
          <p style ={{fontWeight: 300}}>
            GitHub
          </p>
        </div>
        <div class="oval-container" style ={{width: '55px'}} >
          <p style ={{fontWeight: 300}}>
            AWS
          </p>
        </div>
      </div>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '14px'}}>
        <div class="oval-container" style ={{width: '80px'}} >
          <p style ={{ fontWeight: 300}}>
            Numpy
          </p>
        </div>
        <div class="oval-container" style ={{width: '120px'}} >
          <p style ={{fontWeight: 300}}>
            Scikit-Learn
          </p>
        </div>
        <div class="oval-container" style ={{width: '80px'}} >
          <p style ={{fontWeight: 300}}>
            Pandas
          </p>
        </div>
      </div>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '14px'}}>
        <div class="oval-container" style ={{width: '110px'}} >
          <p style ={{ fontWeight: 300}}>
            Tensorflow
          </p>
        </div>
        <div class="oval-container" style ={{width: '80px'}} >
          <p style ={{fontWeight: 300}}>
            Pytorch
          </p>
        </div>
        <div class="oval-container" style ={{width: '55px'}} >
          <p style ={{fontWeight: 300}}>
            Jira
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutToolItem;
