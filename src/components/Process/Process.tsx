'use client';

import { motion } from 'framer-motion';
import styles from './Process.module.css';

const steps = [
  { title: 'Discover', text: 'We identify the location, profile, and strategic brief.' },
  { title: 'Present', text: 'Curated options are shaped into an unmatched shortlist.' },
  { title: 'Negotiate', text: 'Every offer is guided with timing and leverage at the forefront.' },
  { title: 'Deliver', text: 'A smooth, white-glove close with long-term guidance.' },
];

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.headingWrap}>
        <p className={styles.kicker}>Our Process</p>
        <h2 className={styles.title}>A disciplined path from aspiration to address.</h2>
      </div>

      <div className={styles.timeline}>
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className={styles.step}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeInOut' }}
          >
            <span className={styles.dot}>{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
