import React from 'react';
import { motion} from 'framer-motion';

function ShootingStar(props) {

  const selectedDuration = 1.25;

  return (

  <div className="shooting-star-generator"
       style={{ 
        zIndex: 12,
       }}>
      <motion.svg
        width="100%"
        height="100%"
        style={{
          y: props.backgroundY,
        }}>
          <motion.circle
            r={props.width}
            initial={{ 
              opacity: 0, 
            }}
            animate={{
              opacity: [0, .8, 1, .8, 0],
              x: [props.startPointX, props.startPointX+props.trajectoryX],
              y: [props.startPointY, props.startPointY+props.trajectoryY],
              transition: {
                opacity: { delay: props.delay, duration: selectedDuration, ease: "easeInOut" },
                x: {delay: props.delay, duration: selectedDuration, ease: "easeInOut" },
                y: {delay: props.delay, duration: selectedDuration, ease: "easeInOut" }
              }
            }}
          />
          <motion.line
            x1={-props.trailLength*props.trajectoryX}
            y1={-props.trailLength*props.trajectoryY}
            x2={0}
            y2={0}
            initial={{ 
              //pathLength: 0, 
              opacity: 0 ,
            }}
            animate={{
              //pathLength: 1,
              opacity: [0, .3, .5, .3, 0],
              x: [props.startPointX, props.startPointX+props.trajectoryX],
              y: [props.startPointY, props.startPointY+props.trajectoryY],
              transition: {
                //pathLength: { delay: props.delay, ease: "easeInOut", duration: 0.2*selectedDuration},
                opacity: { delay: props.delay, duration: selectedDuration, ease: "easeInOut"  },
                x: {delay: props.delay, duration: selectedDuration, ease: "easeInOut"  },
                y: {delay: props.delay, duration: selectedDuration, ease: "easeInOut"  }
              }
            }}
          />
      </motion.svg>
  </div>

      
  );
}

export default ShootingStar;
