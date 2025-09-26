import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import herostyle from './hero.module.css';
import heroBg from '/images/my-image.webp';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
  const typed = new Typed(typedRef.current, {
    strings: [
      'Full Stack Developer',
      'ASP.NET Core Developer',
      'MERN Stack Developer',
      'UI/UX Designer',
      'React.js Specialist'
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    loop: true,
  });

  return () => typed.destroy();
}, []);

  return (
    <section id="hero" className={herostyle.hero}>
      <img src={heroBg} alt="Hero Background" className={herostyle.img} />
      <div className={herostyle.container}>
        <h2>M Uzair Khan</h2>
        <p>
          I'm <span ref={typedRef}></span>
        </p>
        <div className={herostyle.socialLinks}>
          <a href="https://www.facebook.com/muzairkhan17" target="_blank" rel="noopener noreferrer" className={`${herostyle.icon} ${herostyle.facebook}`}>
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/muzairkhan17" target="_blank" rel="noopener noreferrer" className={`${herostyle.icon} ${herostyle.instagram}`}>
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/muzairkhan17" target="_blank" rel="noopener noreferrer" className={`${herostyle.icon} ${herostyle.linkedin}`}>
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/MUzairKhan-17" target="_blank" rel="noopener noreferrer" className={`${herostyle.icon} ${herostyle.github}`}>
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;