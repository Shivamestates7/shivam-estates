'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './About.module.css';

// Animation variants for smooth text reveals
const headingVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } 
  },
};

const pillarVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const pillarCards = [
  {
    title: 'Who We Are',
    description: 'Land investment specialists with deep market knowledge.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Our Vision',
    description: 'To be the most trusted land advisory brand in India.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Our Mission',
    description: 'To deliver transparency, value and long-term relationships.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Our Values',
    description: 'Integrity, Transparency, Commitment and Excellence.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '1000+', label: 'Deals Closed' },
  { value: '5000+', label: 'Acres Sold' },
  { value: '100%', label: 'Transparent Deals' },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      {/* Top Section: Intro and Image */}
      <div className={styles.topSection}>
        <div className={styles.copy}>
          {/* Animated Heading */}
          <motion.h2
            className={styles.title}
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Building Trust. <br />
            <span>Delivering Value.</span>
          </motion.h2>

          <motion.p
            className={styles.leadText}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            At Shivam Estates, we specialize in premium land and plot investments.
          </motion.p>
          
          <p className={styles.bodyText}>
            Our mission is to provide transparent transactions, verified properties, and expert guidance to help our clients build long-term wealth.
          </p>
        </div>

        <motion.div
          className={styles.imageFrame}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: 'easeInOut' }}
        >
          <Image
            src="/about-estate.png"
            alt="Shivam Estates Luxury Office"
            fill
            className={styles.image}
          />
        </motion.div>
      </div>

      {/* Light Container Card: Pillars with Staggered Entrance */}
      <motion.div
        className={styles.pillarsContainer}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <div className={styles.pillarsGrid}>
          {pillarCards.map((card, index) => (
            <motion.div
              key={card.title}
              className={styles.pillarCard}
              custom={index}
              variants={pillarVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className={styles.pillarIcon}>{card.icon}</div>
              <h3 className={styles.pillarTitle}>{card.title}</h3>
              <p className={styles.pillarDesc}>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Stats Row */}
      <motion.div
        className={styles.statsGrid}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <strong className={styles.statValue}>{stat.value}</strong>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}