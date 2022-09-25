import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/vid2.mp4' autoPlay loop muted />
      <h1>INDIA'S FUTURE LIES IN ITS VILLAGES</h1>
      <p>-Mahatma Gandhi</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          JOIN US
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('button clicked')}
        >
          OUR VISION <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;