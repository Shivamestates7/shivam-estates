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
      {/* Background ambient glow */}
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        <div className={styles.headingWrap}>
          <p className={styles.kicker}>Our Process</p>
          <h2 className={styles.title}>A disciplined path from aspiration to address.</h2>
          <div className={styles.goldLine} />
        </div>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className={styles.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: 'easeOut' }}
              whileHover={{
                y: -6,
                boxShadow: '0 20px 35px -10px rgba(197, 160, 89, 0.18)',
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
            >
              <div className={styles.stepHeader}>
                <span className={styles.dot}>0{index + 1}</span>
                {index < steps.length - 1 && <div className={styles.connectorLine} />}
              </div>
              
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}