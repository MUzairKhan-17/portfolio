import React from 'react';
import splashcss from './splashscreen.module.css';
import myImage from '../../assets/images/logo.png';

const SplashScreen = ({ fadeOut }) => {
  return (
    <div className={`${splashcss.splashContainer} ${fadeOut ? splashcss.fadeOut : ''}`}>
      <div className={splashcss.lineAnimations}>
        {[...Array(5)].map((_, i) => (
          <div key={`h${i}`} className={splashcss.horizontalLine}></div>
        ))}
        {[...Array(5)].map((_, i) => (
          <div key={`v${i}`} className={splashcss.verticalLine}></div>
        ))}
      </div>

      <img src={myImage} alt="Logo" className={splashcss.logoImage} />
      <h1 className={splashcss.logoName}>
        <span className={splashcss.lineText}>Uzair Portfolio</span>
      </h1>
    </div>
  );
};

export default SplashScreen;