import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ShootingStar from './ShootingStar';
import './ShootingStar.css';

function ShootingStarGenerator(props) {
  const [stars, setStars] = useState([]);
  const containerRef = useRef(null);

  // Function to generate a new shooting star and add it to the stars array
  const generateStar = () => {

    if (!containerRef.current) return; // Ensure the container element is available

    // Get the container's dimensions
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    // generate x starting position
    const minX = 30;
    const maxX = 100;
    const startPointX = Math.floor(minX + (Math.random() * (maxX - minX + 1)));
    // generate y starting position
    const minY = 0;
    const maxY = 30;
    const startPointY = Math.floor(minY + (Math.random() * (maxY - minY + 1)));
    // generate delay
    const minDelay = 0;
    const maxDelay = 1;
    const delay = Math.floor(minDelay + (Math.random() * (maxDelay - minDelay + 1)));
    // generate x trajectory
    const possibleTrajX = [-0.3] // can add more options here
    const randomIndex = Math.floor(Math.random() * possibleTrajX.length);
    // generate star using above parameters
    const newStar = (
      <ShootingStar
        key={Date.now()} // Using a unique key to ensure React re-renders when a new star is added
        startPointX={containerWidth * (startPointX / 100)} // get percent of container value
        startPointY={containerHeight * (startPointY / 100)} // get percent of container value
        trajectoryX={containerWidth * possibleTrajX[randomIndex]}
        trajectoryY={containerHeight * 0.15}
        delay={delay}
      />
    );

    setStars((prevStars) => [...prevStars, newStar]);
  };

  useEffect(() => {
    // Start generating stars every second
    const intervalId = setInterval(generateStar, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (

    <div className='shooting-star-generator' ref={containerRef}>
      {stars.map((star, index) => (
        <motion.div key={index}>{star}</motion.div>
      ))}
    </div>

  );
}

export default ShootingStarGenerator;
