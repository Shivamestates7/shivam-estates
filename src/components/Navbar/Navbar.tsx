'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Land Opportunities', href: '#land-opportunities' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        className={styles.header}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {/* Left: Brand Logo & Name */}
        <a href="#home" className={styles.brandWrap}>
          <div className={styles.brandMark}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L3 9v11a1 1 0 001 1h16a1 1 0 001-1V9l-9-7z" />
              <path d="M9 22V12h6v10" />
            </svg>
          </div>
          <div className={styles.brandInfo}>
            <p className={styles.brand}>Shivam Estates</p>
            <span className={styles.brandTag}>
              PREMIUM LAND INVESTMENTS &bull; TRANSPARENT DEALS &bull; TRUSTED ADVISORS
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Desktop CTA Button */}
        <a href="#contact" className={styles.ctaButton}>
          Book Site Visit
        </a>

        {/* Right: Mobile Hamburger Button (Three Lines) */}
        <button
          className={styles.hamburgerBtn}
          onClick={toggleMobileMenu}
          aria-label="Open navigation menu"
        >
          <span className={`${styles.bar} ${mobileOpen ? styles.barTop : ''}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.barMid : ''}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.barBot : ''}`} />
        </button>
      </motion.header>

      {/* Mobile Side Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dark Blur Overlay Backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />

            {/* Left Side Sliding Luxury Drawer */}
            <motion.aside
              className={styles.sideDrawer}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            >
              {/* Drawer Header */}
              <div className={styles.drawerHeader}>
                <div className={styles.drawerBrandInfo}>
                  <p className={styles.drawerBrand}>Shivam Estates</p>
                  <span className={styles.drawerBrandTag}>LUXURY REAL ESTATE ADVISORY</span>
                </div>

                <button
                  className={styles.closeBtn}
                  onClick={closeMobileMenu}
                  aria-label="Close navigation menu"
                >
                  ✕
                </button>
              </div>

              <div className={styles.drawerDivider} />

              {/* Cleaned Mobile Navigation Links */}
              <nav className={styles.drawerNav}>
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className={styles.drawerLink}
                    onClick={closeMobileMenu}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.08 }}
                    whileHover={{ x: 6 }}
                  >
                    <span className={styles.linkLabel}>{item.label}</span>
                    <span className={styles.linkArrow}>→</span>
                  </motion.a>
                ))}
              </nav>

              {/* Drawer Bottom CTA */}
              <div className={styles.drawerFooter}>
                <a
                  href="#contact"
                  className={styles.drawerCta}
                  onClick={closeMobileMenu}
                >
                  Book Site Visit
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}