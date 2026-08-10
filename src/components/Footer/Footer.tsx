'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Properties', href: '#properties' },
  { name: 'Investment', href: '#investment' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919820012345',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Upper Main Section (Light Theme) */}
      <div className={styles.topSection}>
        {/* Top Gold Line */}
        <motion.div
          className={styles.topLine}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        <div className={styles.content}>
          {/* Brand Column */}
          <div className={styles.brandBlock}>
            <a href="#home" className={styles.logoWrap}>
              <Image
                src="/NewLogo.png"
                alt="Shree Sai Estates Logo"
                width={160}
                height={50}
                className={styles.logoImg}
                priority
              />
            </a>
            <span className={styles.tagline}>Luxury real estate advisory</span>
          </div>

          {/* Navigation Column */}
          <div className={styles.links}>
            <p className={styles.columnTitle}>Navigation</p>
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={styles.navLink}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className={styles.socials}>
            <p className={styles.columnTitle}>Connect</p>
            <div className={styles.socialList}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialItem}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={styles.iconWrap}>{social.icon}</span>
                  <span className={styles.socialName}>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dark Bottom Legal Bar (Original Color) */}
      <div className={styles.bottomBarWrapper}>
        <div className={styles.bottomBar}>
          <span>© 2026 Shree Sai Estates. All rights reserved.</span>
          <span>Private tours by appointment</span>
        </div>
      </div>
    </footer>
  );
}