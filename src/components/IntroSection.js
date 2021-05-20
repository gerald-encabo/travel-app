import React from 'react';
import '../App.scss';
import { Button } from './Button';
import './IntroSection.scss';

function IntroSection() {
  return (
    <div className='intro'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className='intro-btns'>
        <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
          Get Started
        </Button>
        <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>
          Watch Trailer<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default IntroSection;
