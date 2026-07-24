'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './FeaturedProperty.module.css';

const gallery = ['/property-01.svg', '/property-02.svg'];

export default function FeaturedProperty() {
  return (
    <section id="properties" className={styles.featured}>
      <div className={styles.headingWrap}>
        <p className={styles.kicker}>Featured Property</p>
        <h2 className={styles.title}>A signature address with panoramic scale.</h2>
      </div>

      <div className={styles.showcase}>
        <motion.div
          className={styles.primaryVisual}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: 'easeInOut' }}
        >
          <Image src="/property-01.svg" alt="Featured luxury residence" fill className={styles.image} />
        </motion.div>

        <div className={styles.sideStack}>
          {gallery.slice(1).map((image) => (
            <motion.div
              key={image}
              className={styles.thumb}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
              <Image src={image} alt="Luxury home gallery view" fill className={styles.image} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.infoCard}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
        >
          <div>
            <span>Price</span>
            <strong>$4.8M</strong>
          </div>
          <div>
            <span>Location</span>
            <strong>Malabar Hill, Mumbai</strong>
          </div>
          <div>
            <span>Area</span>
            <strong>6,700 sq ft</strong>
          </div>
          <a href="#contact" className={styles.actionButton}>Request a Viewing</a>
        </motion.div>
      </div>
    </section>
  );
}
