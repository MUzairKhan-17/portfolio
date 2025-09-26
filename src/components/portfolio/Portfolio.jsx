import React, { useState } from 'react';
import styles from './portfolio.module.css';
import reactimage from '/images/react.webp'
import mernimage from '/images/mern.webp'
import dotnetimage from '/images/dotnet.webp'
import flutterimage from '/images/flutter.webp'

const portfolioItems = [
  {
    id: 1,
    title: 'React Portfolio',
    category: 'React',
    image: reactimage,
    description: 'Personal portfolio website built using React and modern CSS modules.',
  },
  {
    id: 2,
    title: 'MERN Event Management',
    category: 'MERN',
    image: mernimage,
    description: 'Event management platform using MongoDB, Express.js, React.js, and Node.js.',
  },
  {
  id: 3,
  title: 'Chef Recipes Website',
  category: 'ASP.NET Core',
  image: dotnetimage,
  description: `Chef Recipes Website ASP.NET Core MVC, SQL Server, Bootstrap (integrated with custom template).`,
  },
  {
    id: 4,
    title: 'Flutter UI Auth',
    category: 'Flutter',
    image: flutterimage,
    description: 'Login/signup mobile UI built with Flutter and Firebase integration.',
  }
];

const categories = ['All', 'React', 'MERN', 'ASP.NET Core', 'Flutter'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id='portfolio' className={styles.section}>
      <div className={styles.sectionTitle}>
        <h2>Portfolio</h2>
        <p>My Latest Projects</p>
      </div>

      <div className={styles.filters}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.portfolioGrid}>
        {filteredItems.map(item => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.overlay}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className={styles.tag}>{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;