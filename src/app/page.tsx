import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import LandOpportunities from '../components/LandOpportunities/LandOpportunities';
import Services from '../components/Services/Services';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Process from '../components/Process/Process';
import FeaturedProperty from '../components/FeaturedProperty/FeaturedProperty';
import Investment from '../components/Investment/Investment';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <About />
        <LandOpportunities />
        <Services />
        <WhyChooseUs />
        <Process />
        <FeaturedProperty />
        <Investment />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
