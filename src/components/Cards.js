import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my latest projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/react.jpg'
              text='Personal website (AKA the one you are on now!)'
              label='Web Development'
              path='https://github.com/romtrost/personal-website/tree/master'
            />
            <CardItem
              src='images/CNN.png'
              text='Music genre classifier using Convolutional Neural Networks'
              label='Deep Learning'
              path='https://github.com/romtrost/Music-Genre-Classification'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
