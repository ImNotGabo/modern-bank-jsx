import styles from '../styles';
import { feedback } from '../constants';
import FeedbacCard from './FeedbackCard';

const Testimonials = () => (
  <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`} id='clients'>
    <div className='absolute z-[0] w-[50%] h-[60%] -right-[50%] rounded-full blue__gradient' />
    <div className={`w-full flex flex-col justify-between items-center md:flex-row sm:mb-16 mb-6 relative z-[1]`}>
      <h1 className={styles.heading2}>
        What people are <br className='sm:block hidden' />
        saying about us
      </h1>

      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
    </div>

    <div className='w-full flex flex-wrap sm:justify-start justify-center feedback-container relative z-[1]'>
      {feedback.map((card) => (
        <FeedbacCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
