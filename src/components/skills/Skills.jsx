import React from 'react';
import styles from './skills.module.css';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaDatabase, FaLaptopCode, FaPaintBrush } from 'react-icons/fa';

const skillCategories = [
  {
    icon: <FaCode color="#00ffee" />,
    title: 'Languages',
    skills: [
      { name: 'C#', level: 90 },
      { name: 'Python', level: 75 },
      { name: 'Dart', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'PHP', level: 75 },
    ],
  },
  {
    icon: <FaLaptopCode color="#00ffee" />,
    title: 'Web Technologies',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Bootstrap', level: 88 },
      { name: 'jQuery', level: 80 },
    ],
  },
  {
    icon: <FaTools color="#00ffee" />,
    title: 'Frameworks & Tools',
    skills: [
      { name: 'ASP.NET Core', level: 85 },
      { name: 'MVC', level: 80 },
      { name: 'Flask', level: 75 },
      { name: 'Django', level: 80 },
      { name: 'Node JS', level: 88 },
      { name: 'React.js', level: 90 },
      { name: 'Express.js', level: 87 },
      { name: 'Laravel', level: 75 },
      { name: 'Flutter', level: 78 },
      { name: 'Angular CLI', level: 70 },
    ],
  },
  {
    icon: <FaDatabase color="#00ffee" />,
    title: 'Databases',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 90 },
      { name: 'SQL Server', level: 88 },
      { name: 'SQL Server Lite', level: 74 },
      { name: 'Firebase', level: 82 },
    ],
  },
  {
    icon: <FaPaintBrush color="#00ffee" />,
    title: 'Design Tools',
    skills: [
      { name: 'Adobe XD', level: 80 },
      { name: 'Figma', level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Technical Skills</h2>
          <p>Languages, Frameworks, Databases, and Tools</p>
        </div>

        <div className={styles.skillsContent}>
          {skillCategories.map((category, idx) => (
            <motion.div
              className={styles.categoryBlock}
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.categoryTitle}>
                {category.icon} &nbsp; {category.title}
              </div>

              {category.skills.map((skill, index) => (
                <div key={index} className={styles.progress} title={`Proficiency in ${skill.name}`}>
                  <div className={styles.skill}>
                    <span>{skill.name}</span>
                    <span className={styles.val}>{skill.level}%</span>
                  </div>
                  <div className={styles.progressBarWrap}>
                    <div
                      className={styles.progressBar}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;