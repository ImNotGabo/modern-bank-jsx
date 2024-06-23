import styles from '../styles';
/* eslint-disable react/prop-types */

const Section = ({ content }) => (
  <section className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
    <div className={styles.boxWidth}>{content}</div>
  </section>
);

export default Section;
