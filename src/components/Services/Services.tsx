'use client';

import { motion } from 'framer-motion';
import styles from './Services.module.css';

const services = [
  {
    title: 'Land Investment Advisory',
    description: 'Expert guidance to help you choose high-yield land parcels for maximum long-term growth.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Verified Property Consultation',
    description: 'Every property undergoes thorough 7/12 record checks, revenue verification, and title scrutiny.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    title: 'Builder & Land Development',
    description: 'Connecting landowners with trusted developers and partners for high-quality joint ventures.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z" />
      </svg>
    ),
  },
  {
    title: 'Documentation & Registration',
    description: 'Complete end-to-end support for legal paperwork, agreement drafting, and sub-registrar registration.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
    ),
  },
  {
    title: 'Site Visit Assistance',
    description: 'Guided private site tours with field experts to inspect ground reality, access, and topography.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5-2.5-2.5 2.5z" />
      </svg>
    ),
  },
  {
    title: 'End-to-End Support',
    description: 'Transparent execution and single-point assistance from initial booking to final possession handover.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41 5.59 5.59 12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.headingWrap}>
          <span className={styles.kicker}>Premium Offerings</span>
          <h2 className={styles.title}>Our Services</h2>
          <div className={styles.goldLine} />
        </div>

        {/* 3x2 Grid fitting in 1 Screen Viewport */}
        <div className={styles.grid}>
          {services.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.icon}>{item.icon}</div>
                <span className={styles.number}>0{index + 1}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}