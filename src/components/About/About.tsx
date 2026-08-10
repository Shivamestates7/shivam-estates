'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import styles from './About.module.css';

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const pillarVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const pillarCards = [
  {
    title: 'Who We Are',
    description: 'Land investment specialists with deep market knowledge.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: 'Our Vision',
    description: 'To be the most trusted land advisory brand in India.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <circle cx="11" cy="14" r="2" />
      </svg>
    ),
  },
  {
    title: 'Our Mission',
    description: 'To deliver transparency, value and long-term relationships.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11" />
      </svg>
    ),
  },
  {
    title: 'Our Values',
    description: 'Integrity, Transparency, Commitment and Excellence.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

const stats = [
  { target: 500, suffix: '+', label: 'Happy Clients' },
  { target: 1000, suffix: '+', label: 'Deals Closed' },
  { target: 5000, suffix: '+', label: 'Acres Sold' },
  { target: 100, suffix: '%', label: 'Transparent Deals' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration: 2, ease: 'easeOut' });
      return controls.stop;
    }
  }, [isInView, count, target]);

  useEffect(() => {
    return rounded.on('change', (v) => {
      if (ref.current) {
        ref.current.textContent = `${v}${suffix}`;
      }
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className={styles.about}>
      
      {/* Viewport Above-The-Fold Wrapper */}
      <div className={styles.heroViewWrapper}>
        
        {/* Full Bleed Split Layout restored */}
        <div className={styles.topSection}>
          <div className={styles.copy}>
            <div className={styles.copyInner}>
              <span className={styles.tagline}>ABOUT Shree Sai ESTATES</span>
              
              <motion.h2
                className={styles.title}
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                Building Trust. <br />
                Delivering Value.
              </motion.h2>

              <div className={styles.divider} />

              <motion.p
                className={styles.leadText}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                At Shree Sai Estates, we specialize in premium land and plot investments.
              </motion.p>

              <motion.p
                className={styles.bodyText}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Our mission is to provide transparent transactions, verified properties, and expert guidance to help our clients build long-term wealth.
              </motion.p>
            </div>
          </div>

          <div className={styles.imageFrame}>
            <Image
              src="/farmhouse.png"
              alt="Shree Sai Estates Office"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={styles.image}
              priority
            />
            {/* Subtle inner dark gradient to bind the image gracefully into the design */}
            <div className={styles.imageOverlay} />
          </div>
        </div>

        {/* Off-White Pillars Section */}
        <motion.div
          className={styles.pillarsContainer}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className={styles.container}>
            <div className={styles.pillarsGrid}>
              {pillarCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  className={styles.pillarCard}
                  custom={index}
                  variants={pillarVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className={styles.pillarIconWrap}>
                    <div className={styles.pillarIcon}>{card.icon}</div>
                  </div>
                  <h3 className={styles.pillarTitle}>{card.title}</h3>
                  <p className={styles.pillarDesc}>{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.statsGrid}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <strong className={styles.statValue}>
                  <Counter target={stat.target} suffix={stat.suffix} />
                </strong>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </section>
  );
}