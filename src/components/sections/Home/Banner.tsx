import styles from './Banner.module.css';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <img src="/images/banner.jpg" alt="banner" className={styles.bannerImg} />
    </div>
  );
}
