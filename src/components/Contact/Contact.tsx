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
    actionType: 'phone',
    value: '+919168268068',
  },
  {
    text: 'info@shreesaiestates.co.in',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    actionType: 'email',
    value: 'info@shreesaiestates.co.in',
  },
  {
    text: 'Shree Sai Business Group, 2nd floor dusane golden bricks, narayan bapu nagar, jail road, nashik road, nashik - 422101',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    actionType: 'map',
    value: "https://www.google.com/maps/place/19%C2%B058'35.2%22N+73%C2%B050'10.8%22E/@19.9764412,73.8337687,17z/data=!3m1!4b1!4m4!3m3!8m2!3d19.9764412!4d73.8363436!18m1!1e1?entry=ttu",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleContactClick = (detail: typeof contactDetails[0]) => {
    if (detail.actionType === 'phone') {
      window.location.href = `tel:${detail.value}`;
    } else if (detail.actionType === 'email') {
      window.location.href = `mailto:${detail.value}`;
    } else if (detail.actionType === 'map') {
      window.open(detail.value, '_blank');
    }
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
              className={`${styles.contactItem} ${styles.clickableItem}`}
              whileHover={{ x: 6, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleContactClick(detail)}
              title={
                detail.actionType === 'phone' 
                  ? 'Click to call / connect' 
                  : detail.actionType === 'email' 
                  ? 'Click to send email' 
                  : 'Click to view on Google Maps'
              }
            >
              <div className={styles.iconWrap}>{detail.icon}</div>
              <span>{detail.text}</span>
            </motion.div>
          ))}

          {/* WhatsApp Link Button with Official SVG Logo */}
          <motion.div
            className={`${styles.contactItem} ${styles.whatsappItem}`}
            whileHover={{ x: 6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.open('https://wa.me/919168268068?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20land%20investments.', '_blank')}
            title="Chat directly on WhatsApp"
          >
            <div className={styles.whatsappIconWrap}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.whatsappSvg}>
                <path d="M17.472 14.382c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.443-9.891 9.893-9.891 2.64 0 5.122 1.03 6.988 2.898a9.84 9.84 0 012.893 6.994c-.003 5.45-4.444 9.891-9.894 9.891m9.04-18.935C19.06 1.626 15.656.32 12.054.32 5.568.32.316 5.572.315 12.06c0 2.128.556 4.204 1.613 6.029L.32 23.684l5.772-1.514a11.97 11.97 0 005.96 1.594h.005c6.485 0 11.738-5.253 11.741-11.74 0-3.138-1.221-6.085-3.438-8.303" />
              </svg>
            </div>
            <span className={styles.whatsappText}>Chat with us on WhatsApp</span>
          </motion.div>
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