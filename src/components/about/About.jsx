import React, { useEffect, useRef } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import styles from './about.module.css';
import profileImg from '../../assets/images/my-image.jpg';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll(`.${styles.fadeInUp}`);
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section id="about" className={styles.aboutSection} ref={sectionRef}>
      <div className={`${styles.container} ${styles.sectionTitle} ${styles.fadeInUp}`}>
        <h2>About</h2>
        <p>
          Passionate and detail-oriented ASP.NET Core developer with hands-on experience building scalable web applications. Proficient in full-stack development using C#, .NET Core, JavaScript, React, Express, MongoDB, and SQL. Proven ability to build responsive UIs and integrate backend APIs. Enthusiastic about learning new technologies and contributing to impactful software solutions.
        </p>
      </div>

      <div className={`${styles.container} ${styles.fadeInUp}`}>
        <div className={styles.imageInfoRow}>
          {/* Profile Image */}
          <div className={`${styles.imageBox} ${styles.fadeInUp}`}>
            <img src={profileImg} alt="Profile" className={styles.profileImg} />
          </div>

          {/* Name/Contact Info */}
          <div className={`${styles.infoBox} ${styles.fadeInUp}`}>
            <h2 className={styles.roleTitle}>Full Stack Developer &amp; UI Designer</h2>
            <p className={`${styles.fstItalic} ${styles.py3}`}>
              I enjoy solving problems with clean, efficient code. My interest lies in both frontend and backend development with modern stacks.
            </p>

            <div className={styles.row}>
              <div className={styles.colLg6}>
                <ul>
                  <li><FaChevronRight className={styles.icon} /> <strong>Name:</strong> <span>Muhammad Uzair Khan</span></li>
                  <li><FaChevronRight className={styles.icon} /> <strong>Phone:</strong> <span>0317-1043099</span></li>
                  <li><FaChevronRight className={styles.icon} /> <strong>City:</strong> <span>Karachi, Pakistan</span></li>
                  <li><FaChevronRight className={styles.icon} /> <strong>Email:</strong> <span>uzairarif1718@gmail.com</span></li>
                </ul>
              </div>
              <div className={styles.colLg6}>
                <ul>
                  <li><FaChevronRight className={styles.icon} /> <strong>Education:</strong> <span>Intermediate in Science</span></li>
                  <li><FaChevronRight className={styles.icon} /> <strong>Freelance:</strong> <span>Available</span></li>
                  <li><FaChevronRight className={styles.icon} /> <strong>GitHub:</strong> <span><a href="https://github.com/MUzairKhan-17" target="_blank" rel="noopener noreferrer">github.com/MUzairKhan-17</a></span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;