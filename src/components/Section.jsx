import styles from '../style';
/* eslint-disable react/prop-types */

const Section = ({ content }) => {
  return (
    <section className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={styles.boxWidth}>{content}</div>
    </section>
  );
};

export default Section;
