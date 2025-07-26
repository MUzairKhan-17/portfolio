import React, { useEffect, useState } from 'react';
import './App.css';

import SplashScreen from './components/splashscreen/SplashScreen.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';

const Hero = React.lazy(() => import('./components/hero/Hero.jsx'));
const About = React.lazy(() => import('./components/about/About.jsx'));
const Project = React.lazy(() => import('./components/project/Project.jsx'));
const Skills = React.lazy(() => import('./components/skills/Skills.jsx'));
const Resume = React.lazy(() => import('./components/resume/Resume.jsx'));
const Portfolio = React.lazy(() => import('./components/portfolio/Portfolio.jsx'));
const Services = React.lazy(() => import('./components/services/Service.jsx'));
const Contact = React.lazy(() => import('./components/contact/Contact.jsx'));

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 3190);     // Start fade-out
    const removeTimer = setTimeout(() => setShowSplash(false), 3200); // Fully remove

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {showSplash && <SplashScreen fadeOut={fadeOut} />}

      {!showSplash && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Project />
          <Skills />
          <Resume />
          <Portfolio />
          <Services />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;