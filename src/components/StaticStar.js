import React  from 'react';
import { motion } from "framer-motion";

function StaticStar(props) {

  return (

  <div className="static-star-generator"
      style={{ 
        zIndex: 0,
      }}>
      <motion.svg
        width="100%"
        height="100%"
        style={{
          y: props.backgroundY,
        }}>
          <motion.circle
            initial={{ 
              opacity: 0, 
              r: props.width
            }}
            animate={{
              opacity: [.8, .9, 1, .7, .5, .6, .8, .9, 1, 0.9, 0.6, 0.8, 0.7],
              r: [props.width, props.width+0.5, props.width, props.width-0.25, props.width-0.5, props.width],
              x: props.startPointX,
              y: props.startPointY,
              transition:{
                opacity: {duration: props.duration, ease: "easeInOut", repeat: Infinity, },
                r: {duration: props.duration, ease: "easeInOut", repeat: Infinity, },
                x: {duration: 0.0 },
                y: {duration: 0.0 }
              }
            }}

            
          />
      </motion.svg>
  </div>

      
  );
}

export default StaticStar;
