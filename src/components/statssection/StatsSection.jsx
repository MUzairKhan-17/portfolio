import React, { useEffect, useState } from 'react';
import { BsEmojiSmile, BsJournalRichtext, BsHeadset, BsPeople } from 'react-icons/bs';
import Statstyles from './StatsSection.module.css';

const StatsSection = () => {
  const stats = [
    { icon: <BsEmojiSmile />, end: 232, title: 'Happy Clients', desc: 'consequuntur quae' },
    { icon: <BsJournalRichtext />, end: 521, title: 'Projects', desc: 'adipisci atque cum quia aut' },
    { icon: <BsHeadset />, end: 1453, title: 'Hours Of Support', desc: 'aut commodi quaerat' },
    { icon: <BsPeople />, end: 32, title: 'Hard Workers', desc: 'rerum asperiores dolor' },
  ];

  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setAnimatedValues((prevValues) => {
        const updated = prevValues.map((val, i) => {
          if (val < stats[i].end) {
            const increment = Math.ceil(stats[i].end / 60);
            return Math.min(val + increment, stats[i].end);
          }
          return val;
        });

        const isDone = updated.every((val, i) => val === stats[i].end);
        if (!isDone) {
          animationFrameId = requestAnimationFrame(animate);
        }

        return updated;
      });
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="stats" className={Statstyles.statsSection}>
      <div className={Statstyles.container}>
        {stats.map((item, index) => (
          <div key={index} className={Statstyles.statCard}>
            <div className={Statstyles.icon}>{item.icon}</div>
            <div className={Statstyles.number}>{animatedValues[index]}</div>
            <p className={Statstyles.title}>{item.title}</p>
            <p className={Statstyles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;