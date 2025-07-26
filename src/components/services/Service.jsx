import React from 'react';
import styles from './service.module.css';
import {
  FaLaptopCode,
  FaDatabase,
  FaCodeBranch,
  FaMobileAlt,
  FaPalette,
  FaProjectDiagram,
} from 'react-icons/fa';

const serviceData = [
  {
    icon: <FaLaptopCode />,
    title: 'Full-Stack Web Development',
    desc: 'Build responsive and scalable web apps using ASP.NET Core, React.js, Node.js, and SQL Server with modern UI design.',
  },
  {
    icon: <FaDatabase />,
    title: 'Database Design & Integration',
    desc: 'Design and manage robust databases using SQL Server, MongoDB, and Firebase, with full CRUD operations and optimization.',
  },
  {
    icon: <FaCodeBranch />,
    title: 'Version Control with GitHub',
    desc: 'Proficient in using GitHub for source control, project collaboration, and maintaining deployment-ready repositories.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Cross-Platform App Development',
    desc: 'Develop mobile applications using Flutter and Dart with integrated backends and responsive designs.',
  },
  {
    icon: <FaPalette />,
    title: 'UI/UX Design',
    desc: 'Craft engaging user interfaces using Bootstrap, Tailwind, Figma, and Adobe XD to ensure user-friendly experiences.',
  },
  {
    icon: <FaProjectDiagram />,
    title: 'Project Development & Management',
    desc: 'Successfully delivered projects like EventSphere, Car360, and Chef Recipes with full authentication and admin dashboards.',
  },
];

const Services = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.sectionTitle}>
        <h2>Services</h2>
        <p>
          Passionate full-stack developer offering a wide range of web and app solutions. Skilled in ASP.NET Core, React, Flutter, and database integration for complete end-to-end product development.
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {serviceData.map((item, index) => (
          <div className={styles.serviceItem} key={index}>
            <div className={styles.icon}>{item.icon}</div>
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.description}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;