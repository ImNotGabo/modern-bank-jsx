import { apple, bill, google } from '../assets';
import styles, { layout } from '../styles';

const Billing = () => {
  return (
    <section className={layout.sectionReverse} id='product'>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt='billing' className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute top-0 w-[50%] h-[50%] rounde-full -left-1/2 white__gradient z-[3]' />
        <div className='absolute bottom-0 w-[50%] h-[50%] rounde-full -left-1/2 pink__gradient z-[0]' />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className='sm:block hidden' /> billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving
          money. But with hundreds of credit cards on the market.
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt='apple_store' className='w-[128px] h-[128px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt='google_play' className='w-[128px] h-[128px] object-contain  cursor-pointer' />
        </div>
      </div>
    </section>
  );
};

export default Billing;
