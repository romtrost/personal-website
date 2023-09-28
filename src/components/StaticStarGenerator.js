import React, { useEffect, useState, useRef } from 'react';
import StaticStar from './StaticStar';
import './StaticStar.css';

function StaticStarGenerator(props) {
  const containerRef = useRef(null);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Rest of the code for star generation
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    const generatedStars = [];

    for (let i = 0; i < 33; i++) {
      // generate star size
      const minSize = 1;
      const maxSize = 3;
      const size = Math.floor(minSize + (Math.random() * (maxSize - minSize + 1)));
      // generate x starting position
      const minX = 1;
      const maxX = 99;
      const startPointX = Math.floor(minX + (Math.random() * (maxX - minX + 1)));
      // generate y starting position
      const minY = 1;
      const maxY = 50;
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
        />
      );
    }

    setStars(generatedStars); // Update the state with the generated stars
  }, []);

  return (
    <div className='shooting-star-generator' ref={containerRef}>
      {stars}
    </div>
  );
}

export default StaticStarGenerator;