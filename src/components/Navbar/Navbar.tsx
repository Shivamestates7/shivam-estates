'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Properties', href: '#properties' },
  { name: 'Investment', href: '#investment' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen((prev) => !prev);
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      {/* Brand Logo & Title */}
      <a href="#home" className={styles.brandWrap}>
        <Image
          src="/NewLogo2.png"
          alt="Shree Sai Estates Logo"
          width={300}
          height={90}
          className={styles.logoImg}
          priority
        />
        <div className={styles.brandInfo}>
          <p className={styles.brand}>Shree Sai Estates</p>
          <span className={styles.brandTag}>
            PREMIUM LAND INVESTMENTS &bull; TRANSPARENT DEALS &bull; TRUSTED ADVISORS
          </span>
        </div>
      </a>

      {/* Desktop Navigation */}
      <nav className={styles.desktopNav}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className={styles.navLink}>
            {link.name}
          </a>
        ))}
      </nav>

      {/* Desktop CTA Button */}
      <a href="#contact" className={styles.ctaButton}>
        Inquire Now
      </a>

      {/* Mobile Hamburger Button */}
      <button
        className={styles.hamburgerBtn}
        onClick={toggleMobileMenu}
        aria-label="Toggle Menu"
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      {/* Mobile Drawer Overlay & Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />

            {/* Side Drawer */}
            <motion.div
              className={styles.sideDrawer}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Drawer Header with Mobile Logo */}
              <div className={styles.drawerHeader}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <Image
                    src="/NewLogo2.png"
                    alt="Shree Sai Estates Logo"
                    width={200}
                    height={65}
                    className={styles.logoImgDrawer}
                  />
                  <p className={styles.drawerBrand}>Shree Sai Estates</p>
                  <span className={styles.drawerBrandTag}>
                    LUXURY REAL ESTATE ADVISORY
                  </span>
                </div>

                <button className={styles.closeBtn} onClick={closeMobileMenu}>
                  ✕
                </button>
              </div>

              <div className={styles.drawerDivider} />

              {/* Mobile Navigation Links */}
              <nav className={styles.drawerNav}>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={styles.drawerLink}
                    onClick={closeMobileMenu}
                  >
                    <span className={styles.linkLabel}>{link.name}</span>
                    <span className={styles.linkArrow}>→</span>
                  </a>
                ))}
              </nav>

              {/* Mobile Drawer Footer CTA */}
              <div className={styles.drawerFooter}>
                <a
                  href="#contact"
                  className={styles.drawerCta}
                  onClick={closeMobileMenu}
                >
                  Inquire Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}