'use client';

import { useState, FormEvent } from "react";

import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const contactDetails = [
  {
    text: '+91 9168268068',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    text: 'shreesaiestates2@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    text: '2nd floor dusane golden bricks, narayan bapu nagar, jail road, nashik road, nashik-422101',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setSubmitted(true);
  setTimeout(() => setSubmitted(false), 4000);
};

  return (
    <section id="contact" className={styles.section}>
      {/* Background Glow Effect */}
      <div className={styles.bgGlow} />

      {/* Left Info Column */}
      <motion.div
        className={styles.info}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className={styles.kicker}>Contact Us</p>
        <h2 className={styles.title}>
          Schedule a <span>Private Consultation.</span>
        </h2>
        <p className={styles.text}>
          Reach out for a discreet viewing, personalized acquisition brief, or long-term land investment strategy.
        </p>

        <div className={styles.contactList}>
          {contactDetails.map((detail, idx) => (
            <motion.div
              key={idx}
              className={styles.contactItem}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.iconWrap}>{detail.icon}</div>
              <span>{detail.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Form Column */}
      <motion.div
        className={styles.formContainer}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Your Full Name" required />
          </div>

          <div className={styles.inputGroup}>
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className={styles.inputGroup}>
            <textarea
              placeholder="Tell us about your land or property requirement..."
              rows={5}
              required
            />
          </div>

          <motion.button
            type="submit"
            className={styles.submitBtn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {submitted ? 'Inquiry Sent ✓' : 'Submit Inquiry'}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}