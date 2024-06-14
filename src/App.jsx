import styles from './style';

export default function App() {
  return (
    <header className='bg-primary w-full overflow-hidden'>
      <nav className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>Navbar</div>
      </nav>
    </header>
  );
}
