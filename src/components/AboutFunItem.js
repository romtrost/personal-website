import React, { useEffect, useRef }  from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'

function AboutFunItem(props) {

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
        <FontAwesomeIcon icon={faFaceSmile} size="xl" style={{color: "#ff932e"}}/>
        <p style ={{fontSize: '24px', fontWeight: 700, marginLeft: '10px'}}>
          Use for fun
        </p>
      </div>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '14px'}}>
        <div class="oval-container" style ={{width: '110px'}} >
          <p style ={{ fontWeight: 300}}>
            Javascript
          </p>
        </div>
        <div class="oval-container" style ={{width: '110px'}} >
          <p style ={{fontWeight: 300}}>
            Typescript
          </p>
        </div>
        <div class="oval-container" style ={{width: '55px'}} >
          <p style ={{fontWeight: 300}}>
            HTML
          </p>
        </div>
      </div>
      <div style ={{display: "flex", alignItems: "center", marginBottom: '14px'}}>
        <div class="oval-container" style ={{width: '70px'}} >
          <p style ={{ fontWeight: 300}}>
            React
          </p>
        </div>
        <div class="oval-container" style ={{width: '90px'}} >
          <p style ={{fontWeight: 300}}>
            C & C++
          </p>
        </div>
        <div class="oval-container" style ={{width: '45px'}} >
          <p style ={{fontWeight: 300}}>
            C#
          </p>
        </div>
        <div class="oval-container" style ={{width: '60px'}} >
          <p style ={{ fontWeight: 300}}>
            Unity
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutFunItem;
