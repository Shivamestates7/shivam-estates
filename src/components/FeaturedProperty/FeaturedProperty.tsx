'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './FeaturedProperty.module.css';

const gallery = [
  { src: '/green-land.png', alt: 'Featured luxury property view' },
  { src: '/investment.png', alt: 'Secondary property view' },
];

export default function FeaturedProperty() {
  return (
    <section id="properties" className={styles.featured}>
      <div className={styles.container}>
        {/* Centered Luxury Header */}
        <div className={styles.headingWrap}>
          <p className={styles.kicker}>Featured Property</p>
          <h2 className={styles.title}>A signature address with panoramic scale.</h2>
          <div className={styles.goldLine} />
        </div>

        {/* Desktop Balanced Showcase Grid */}
        <div className={styles.showcase}>
          {/* Main Dominant Image */}
          <motion.div
            className={styles.primaryVisual}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Image
              src={gallery[0].src}
              alt={gallery[0].alt}
              fill
              sizes="(max-width: 900px) 100vw, 60vw"
              priority
              className={styles.image}
            />
            <span className={styles.badge}>Exclusive Listing</span>
          </motion.div>

          {/* Secondary Accent Image */}
          <motion.div
            className={styles.thumb}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <Image
              src={gallery[1].src}
              alt={gallery[1].alt}
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className={styles.image}
            />
          </motion.div>

          {/* Bottom Compact Info Bar */}
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <div className={styles.infoItem}>
              <span>Price</span>
              <strong>85 Laks</strong>
            </div>

            <div className={styles.divider} />

            <div className={styles.infoItem}>
              <span>Location</span>
              <strong>Nashik</strong>
            </div>

            <div className={styles.divider} />

            <div className={styles.infoItem}>
              <span>Area</span>
              <strong>6,700 sq ft</strong>
            </div>

            <a href="#contact" className={styles.actionButton}>
              Request a Viewing
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}