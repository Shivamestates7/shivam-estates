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
    href: 'https://www.instagram.com/shreesai.estates?igsh=Y2d6eWppdjcwOHl6&utm_source=qr',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61592051293611',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://x.com/ShreeSaiEstates',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919168268068?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20land%20investments.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.443-9.891 9.893-9.891 2.64 0 5.122 1.03 6.988 2.898a9.84 9.84 0 012.893 6.994c-.003 5.45-4.444 9.891-9.894 9.891m9.04-18.935C19.06 1.626 15.656.32 12.054.32 5.568.32.316 5.572.315 12.06c0 2.128.556 4.204 1.613 6.029L.32 23.684l5.772-1.514a11.97 11.97 0 005.96 1.594h.005c6.485 0 11.738-5.253 11.741-11.74 0-3.138-1.221-6.085-3.438-8.303" />
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
                src="/ShreeSaiNewLogo.png"
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

            {/* Timing added directly below the socials section */}
            <div className={styles.timingBlock} style={{ marginTop: '20px' }}>
              <p className={styles.columnTitle} style={{ marginBottom: '8px' }}>Timing</p>
              <p className={styles.timingText} style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.5' }}>
                Mon - Sat: 9:30 AM - 6:30 PM<br />
              </p>
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