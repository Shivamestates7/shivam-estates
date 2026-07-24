'use client';

import { motion } from 'framer-motion';
import styles from './Services.module.css';

const services = [
  {
    title: 'Land Buying & Selling',
    description:
      'End-to-end guidance for purchasing and selling residential, commercial, and agricultural land with complete privacy and legal compliance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 10h6" />
        <path d="M9 14h6" />
      </svg>
    ),
  },
  {
    title: 'Legal & Title Verification',
    description:
      'Thorough due diligence, title search reports, boundary verification, and legal documentation to guarantee 100% risk-free transactions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Investment Advisory',
    description:
      'Strategic portfolio planning and market evaluation for high-yield returns across prime growth corridors and upcoming land developments.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12A10 10 0 1 1 12 2v10z" />
      </svg>
    ),
  },
  {
    title: 'Joint Ventures & Development',
    description:
      'Connecting landowners with reputable developers to unlock the maximum valuation and potential of large acreage parcels.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Resale & Exit Strategy',
    description:
      'Targeted luxury positioning and network reach to ensure seamless liquidations and profitable exit opportunities for property investors.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: 'Post-Acquisition Care',
    description:
      'Dedicated assistance with fencing, possession handover, revenue record updates (7/12 extract), and ongoing land maintenance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
];

// Motion Variants
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        {/* Header Block */}
        <motion.div
          className={styles.headingWrap}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className={styles.kicker}>What We Do</p>
          <h2 className={styles.title}>
            Bespoke Services for <span>Land & Property</span>
          </h2>
          <p className={styles.subtitle}>
            Comprehensive advisory, legal clarity, and strategic support tailored for private buyers and investors.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className={styles.grid}
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              className={styles.card}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
            >
              <div className={styles.iconWrap}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}