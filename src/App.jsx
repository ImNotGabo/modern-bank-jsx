import styles from './styles';
import Section from './components/Section';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Business from './components/Business';
import Billing from './components/Billing';
import CardDeal from './components/CardDeal';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <header className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={styles.boxWidth}>
            <Navbar />
          </div>
        </div>
      </header>

      <section className={`bg-primary ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Hero />
        </div>
      </section>

      <Section content={<Stats />} />
      <Section content={<Business />} />
      <Section content={<Billing />} />
      <Section content={<CardDeal />} />
      <Section content={<Testimonials />} />
      <Section content={<Clients />} />
      <Section content={<CTA />} />
      <Section content={<Footer />} />
    </>
  );
}
