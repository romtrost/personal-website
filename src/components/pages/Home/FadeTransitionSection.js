import React  from 'react';
import './FadeTransitionSection.css';

function FadeTransitionSection() {

  return (

    <div className='transition-section'>
      <div className='transition-wrapper'>
        <div className='overlay'></div>
        <img src='/images/header-background-foreground.png'/>
      </div>
    </div>

  );
}

export default FadeTransitionSection;
