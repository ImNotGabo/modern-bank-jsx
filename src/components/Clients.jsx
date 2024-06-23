import { clients } from '../constants';
import styles from '../styles';

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`} id='clients'>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div className={`flex-1  ${styles.flexCenter} sm:min-w-[192px] min-w-[192px]`} key={client.id}>
            <img src={client.logo} alt='client' className='sm:w-[192px] w-[200px] object-contain' />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
