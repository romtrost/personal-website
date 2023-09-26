import React from 'react';
import { motion} from 'framer-motion';

function ShootingStar(props) {

  return (

    <motion.div
    className="shooting-star"
    initial={{ opacity: 0, width: props.width, height: props.height }}
    animate={{
      opacity: [0, .5, 1, .5, 0],
      x: [props.startPointX, props.startPointX+props.trajectoryX],
      y: [props.startPointY, props.startPointY+props.trajectoryY],
      backgroundColor: ["white", "grey", "white"],
    }}
    transition={{ duration: 1, delay: props.delay, ease: "easeInOut" }}
  />
      
  );
}

export default ShootingStar;
