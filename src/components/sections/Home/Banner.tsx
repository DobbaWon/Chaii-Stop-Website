import styles from './Banner.module.css';

export default function Banner() {
  return (
    <section className={styles.banner}>
      <h1>Welcome to Dobby’s Café</h1>
      <p>Your cozy spot for artisan coffee and pastries.</p>
    </section>
  );
}
