'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './LandOpportunities.module.css';

const landListings = [
  { id: 1, title: 'Premium NA Plots', subtitle: 'Prime Location', image: '/NAplots3.png', tag: 'High Yield' },
  { id: 2, title: 'Investment Land', subtitle: 'High Growth Zone', image: '/investment.png', tag: 'Strategic' },
  { id: 3, title: 'Green Land', subtitle: 'Eco-Friendly Development', image: '/GreenLand.png', tag: 'Exclusive' },
  { id: 4, title: 'Agricultural Land', subtitle: 'Fertile Acreage', image: '/agriculture.png', tag: 'Acreage' },
  { id: 5, title: 'Farmhouse Plots', subtitle: 'Luxury Living', image: '/FarmHouse.png', tag: 'Premium' },
];

const marqueeListings = [...landListings, ...landListings];

export default function LandOpportunities() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section id="land-opportunities" className={styles.section}>
      <div className={styles.headingWrap}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Land Opportunities
        </motion.h2>
        <p className={styles.subtitle}>Explore curated acreage for your next investment</p>
      </div>

      {/* --- DESKTOP VIEW: Premium Accordion --- */}
      <div className={styles.desktopAccordion}>
        {landListings.map((item) => {
          const isActive = activeId === item.id;
          return (
            <motion.div
              key={item.id}
              className={`${styles.accordionCard} ${isActive ? styles.activeCard : ''}`}
              onMouseEnter={() => setActiveId(item.id)}
              onClick={() => setActiveId(item.id)}
              layout
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            >
              <Image src={item.image} alt={item.title} fill className={styles.cardImage} priority={item.id === 1} />
              <div className={styles.overlay} />

              <div className={styles.cardContent}>
                <span className={styles.tag}>{item.tag}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                {isActive && (
                  <motion.p
                    className={styles.cardSubtitle}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {item.subtitle}
                  </motion.p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* --- MOBILE VIEW: Infinite Smooth Auto-Scroll Track --- */}
      <div className={styles.mobileMarqueeWrapper}>
        <motion.div
          className={styles.mobileMarqueeTrack}
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
          }}
        >
          {marqueeListings.map((item, index) => (
            <div key={`${item.id}-${index}`} className={styles.mobileCard}>
              <Image src={item.image} alt={item.title} fill className={styles.cardImage} />
              <div className={styles.mobileOverlay} />
              
              <span className={styles.mobileTag}>{item.tag}</span>

              <div className={styles.mobileCardBody}>
                <h3 className={styles.mobileTitle}>{item.title}</h3>
                <p className={styles.mobileSubtitle}>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}