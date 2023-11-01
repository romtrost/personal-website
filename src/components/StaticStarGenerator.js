import React, { useEffect, useState, useRef } from 'react';
import StaticStar from './StaticStar';
import './StaticStar.css';

function StaticStarGenerator(props) {
  const containerRef = useRef(null);
  const [stars, setStars] = useState([]);

  useEffect(() => {

    const generateStars = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;

      const generatedStars = [];

      for (let i = 0; i < 84; i++) {
        // generate star size
        const minSize = 1;
        const maxSize = 3;
        const size = Math.floor(minSize + (Math.random() * (maxSize - minSize + 1)));
        // generate x starting position
        const minX = 1;
        const maxX = 99;
        const startPointX = Math.floor(minX + (Math.random() * (maxX - minX + 1)));
        // generate y starting position
        const minY = 2;
        const maxY = 100;
        const startPointY = Math.floor(minY + (Math.random() * (maxY - minY + 1)));
        // generate duration
        const minDuration = 2;
        const maxDuration = 10;
        const duration = minDuration + (Math.random() * (maxDuration - minDuration + 1));

        generatedStars.push(
          <StaticStar
            key={i}
            width={size}
            height={size}
            startPointX={containerWidth * (startPointX / 100)}
            startPointY={containerHeight * (startPointY / 100)}
            duration={duration}
            backgroundY={props.backgroundY}
          />
        );
      }

      setStars(generatedStars);
    };

   // Generate stars initially and add a resize event listener
    generateStars();
    window.addEventListener('resize', generateStars);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', generateStars);
    };
  }, [props.backgroundY]);

  return (
    <div className='shooting-star-generator' ref={containerRef}>
      {stars}
    </div>
  );
}

export default StaticStarGenerator;