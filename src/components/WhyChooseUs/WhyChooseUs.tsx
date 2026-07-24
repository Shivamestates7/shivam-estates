'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WhyChooseUs.module.css';

const reasons = [
  {
    id: '01',
    title: '100% Verified Properties',
    shortText: 'Complete legal title checks and clear documentation.',
    detailText:
      'Every land parcel listed with Shivam Estates undergoes thorough legal scrutiny, revenue record updates (7/12 extract verification), and clear boundary demarcation before presentation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Transparent Deals',
    shortText: 'No hidden costs, direct negotiations with buyers and sellers.',
    detailText:
      'We operate with full transparency at every phase. Direct pricing, structured timelines, and zero unexpected charges ensure complete peace of mind.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Expert Market Knowledge',
    shortText: 'Deep insights into high-growth corridors and investment ROI.',
    detailText:
      'Leverage our 12+ years of local advisory experience to identify high-appreciation land, upcoming infrastructure corridors, and strategic commercial hotspots.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12A10 10 0 1 1 12 2v10z" />
        <path d="M12 2a10 10 0 0 1 10 10" />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'End-to-End Assistance',
    shortText: 'From site visits to registration and final possession handover.',
    detailText:
      'Our white-glove advisory team handles everything—guided site visits, agreement drafting, registration assistance, and post-possession land care.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const [activeReason, setActiveReason] = useState(reasons[0]);

  return (
    <section id="why-us" className={styles.section}>
      {/* Subtle Background Radial Glow */}
      <motion.div
        className={styles.backdropGlow}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className={styles.container}>
        {/* Header Block */}
        <div className={styles.headingWrap}>
          <motion.p
            className={styles.kicker}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            An Advisory Practice Built on <span>Trust & Precision.</span>
          </motion.h2>
        </div>

        {/* Interactive Split Feature Layout */}
        <div className={styles.contentGrid}>
          {/* Left Column: Interactive List */}
          <div className={styles.reasonsList}>
            {reasons.map((item) => {
              const isSelected = activeReason.id === item.id;
              return (
                <motion.div
                  key={item.id}
                  className={`${styles.reasonRow} ${
                    isSelected ? styles.activeRow : ''
                  }`}
                  onClick={() => setActiveReason(item)}
                  onMouseEnter={() => setActiveReason(item)}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={styles.numberBadge}>{item.id}</div>
                  <div className={styles.rowTextWrap}>
                    <h3 className={styles.rowTitle}>{item.title}</h3>
                    <p className={styles.rowSub}>{item.shortText}</p>
                  </div>

                  {isSelected && (
                    <motion.div
                      className={styles.activeLine}
                      layoutId="activeGlowLine"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Spotlight Card */}
          <div className={styles.spotlightWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReason.id}
                className={styles.spotlightCard}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <div className={styles.iconCircle}>{activeReason.icon}</div>
                <span className={styles.spotlightId}>{activeReason.id}</span>
                <h3 className={styles.spotlightTitle}>{activeReason.title}</h3>
                <p className={styles.spotlightBody}>{activeReason.detailText}</p>

                <div className={styles.cardFooterTag}>
                  <span>Shivam Estates Guarantee</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}