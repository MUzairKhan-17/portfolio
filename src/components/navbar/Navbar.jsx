import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png';
import CV from '../../assets/Uzair_CV.pdf';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'resume', 'portfolio', 'services', 'contact'];
      let currentSection = 'hero';

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          currentSection = section;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (section) =>
    `${styles.navLink} ${activeSection === section ? styles.active : ''}`;

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoSection}>
        <img src={logo} alt="Logo" className={styles.logoImg} />
        <span className={styles.siteName}>M Uzair Khan</span>
      </div>

      <input type="checkbox" id="menuToggle" className={styles.menuToggle} />
      <label htmlFor="menuToggle" className={styles.menuIcon}>
        <span></span>
        <span></span>
        <span></span>
      </label>

      <ul className={styles.navLinks}>
        <li><a href="#hero" className={getLinkClass('hero')}>Hero</a></li>
        <li><a href="#about" className={getLinkClass('about')}>About</a></li>
        <li><a href="#projects" className={getLinkClass('projects')}>Project's</a></li>
        <li><a href="#skills" className={getLinkClass('skills')}>Skills</a></li>
        <li><a href="#resume" className={getLinkClass('resume')}>Resume</a></li>
        <li><a href="#portfolio" className={getLinkClass('portfolio')}>Portfolio</a></li>
        <li><a href="#services" className={getLinkClass('services')}>Service's</a></li>
        <li><a href="#contact" className={getLinkClass('contact')}>Contact</a></li>
        <li><a href={CV} download className={styles.navLink}>Resume Download</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;