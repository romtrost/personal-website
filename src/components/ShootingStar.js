import React from 'react';
import { motion} from 'framer-motion';

function ShootingStar(props) {

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: [0, .5, 1, .5, 0],
        transition: {
          pathLength: { delay: props.delay, ease: "easeInOut", duration: 1},
          opacity: { delay: props.delay, duration: 1.5 }
        }
    }
  };
  
  return (

  <div className="shooting-star-generator">
    <motion.div
      className="shooting-star"
      initial={{ 
        opacity: 0, 
        width: '5px',//props.width, 
        height: '5px',//props.height 
      }}
      animate={{
        opacity: [0, .5, 1, .5, 0],
        x: [props.startPointX, props.startPointX+props.trajectoryX],
        y: [props.startPointY, props.startPointY+props.trajectoryY],
        backgroundColor: ["white", "grey", "white"],
      }}
      transition={{ 
        duration: 1, 
        delay: props.delay, 
        ease: "easeInOut" }}
    />
    <motion.svg
      width="100%"
      height="100%"
      initial="hidden"
      animate="visible">
        <motion.line
          x1={props.startPointX}
          y1={props.startPointY}
          x2={props.startPointX+props.trajectoryX}
          y2={props.startPointY+props.trajectoryY}
          stroke="#919191"
          variants={draw}
          initial="hidden"
          animate="visible"/>
    </motion.svg>
  </div>

      
  );
}

export default ShootingStar;
