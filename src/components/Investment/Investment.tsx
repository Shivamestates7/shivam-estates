'use client';

import { motion } from 'framer-motion';
import styles from './Investment.module.css';

const benefits = ['Capital preservation with luxury positioning', 'High-demand addresses with sustained appreciation', 'Strong rental and lifestyle-driven value'];

export default function Investment() {
  return (
    <section id="investment" className={styles.section}>
      <div className={styles.overlay} />
      <div className={styles.copy}>
        <p className={styles.kicker}>Investment Outlook</p>
        <h2 className={styles.title}>Real estate with enduring prestige and measured growth.</h2>
        <ul className={styles.benefits}>
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <strong>2026 Forecast</strong>
        <p>Prime addresses continue outperforming on lifestyle appeal, scarcity, and premium demand.</p>
      </motion.div>
    </section>
  );
}
