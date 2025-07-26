import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from "../footer/footer.module.css";

const Footer = () => {
  return (

    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/muzairkhan17" target="_blank" rel="noopener noreferrer" className={`${styles.icon} ${styles.facebook}`}><FaFacebook /></a>
          <a href="https://www.instagram.com/muzairkhan17" target="_blank" rel="noopener noreferrer" className={`${styles.icon} ${styles.instagram}`}><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/muzairkhan17" target="_blank" rel="noopener noreferrer" className={`${styles.icon} ${styles.linkedin}`}><FaLinkedin /></a>
          <a href="https://github.com/MUzairKhan-17" target="_blank" rel="noopener noreferrer" className={`${styles.icon} ${styles.github}`}><FaGithub /></a>
        </div>
        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} <strong className={styles.siteName}>M.Uzair Khan</strong>. All Rights Reserved.</p>
        </div>
        <div className={styles.credits}>
          Designed & Built by M.Uzair Khan
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;