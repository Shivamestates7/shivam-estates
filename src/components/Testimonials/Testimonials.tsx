'use client';

import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const reviews = [
  { name: 'Aarav K.', quote: 'Every detail felt tailored, polished, and impeccably discreet.' },
  { name: 'Naina M.', quote: 'The process was calm, elevated, and remarkable in execution.' },
  { name: 'Rohan S.', quote: 'They understood how to present value without ever compromising taste.' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.headingWrap}>
        <p className={styles.kicker}>Testimonials</p>
        <h2 className={styles.title}>A trusted reputation built on careful delivery.</h2>
      </div>

      <div className={styles.grid}>
        {reviews.map((review, index) => (
          <motion.article
            key={review.name}
            className={styles.card}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeInOut' }}
          >
            <div className={styles.stars}>★★★★★</div>
            <p>“{review.quote}”</p>
            <span>{review.name}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
