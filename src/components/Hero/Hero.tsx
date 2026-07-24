'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

// Key selling points with icons matching the reference banner bottom bar
const keyFeatures = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    label: 'Land Specialists',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: 'Verified Properties',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    label: 'Transparent Deals',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <path d="M20 8v6M23 11h-6" />
      </svg>
    ),
    label: 'Expert Guidance',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    label: 'End-To-End Support',
  },
];

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background Image & Overlay */}
      <div className={styles.imageWrap}>
        <Image
          src="/hero-bg.png" // Replace with your high-res sunset landscape image
          alt="Premium Land Real Estate Sunset View"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: 'easeInOut' }}
          >
            Own the Land. <br />
            <span>Shape the Future.</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          >
            Premium NA Plots, Investment Land, Green Land &amp; Carefully Curated Real Estate Opportunities.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
          >
            <a href="#land-opportunities" className={styles.primaryButton}>
              Explore Land Opportunities
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Book Site Visit
            </a>
          </motion.div>
        </div>

        {/* Feature Icons Bar at the bottom of the Hero */}
        <motion.div
          className={styles.featuresBar}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeInOut' }}
        >
          {keyFeatures.map((item) => (
            <div key={item.label} className={styles.featureItem}>
              <div className={styles.featureIcon}>{item.icon}</div>
              <span className={styles.featureLabel}>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}