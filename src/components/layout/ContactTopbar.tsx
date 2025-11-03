import styles from './ContactTopbar.module.css';

export default function ContactTopbar() {
  return (
    <div className={styles.contactTopbar}>
      <a href='tel:01772846558' className={styles.phone}>📞01772 846558</a>

      <div className={styles.socials}>
        <a href='mailto:contact@chaiistop.uk'>
          <img
            className={styles.emailIcon}
            src='./icons/email-icon.png'
            alt='Email'
          />
        </a>
        
        <a href='https://instagram.com/chaiistop_'>
          <img
            className={styles.instagramIcon}
            src='./icons/instagram-icon.png'
            alt='Instagram'
          />
        </a>

        <a href='https://facebook.com/chaiistop'>
          <img
            className={styles.facebookIcon}
            src='./icons/facebook-icon.png'
            alt='Facebook'
          />
        </a>
      </div>

      <a href="https://goo.gl/maps/your-location" target="_blank" rel="noopener noreferrer">📍169 St Paul's Rd, Deepdale, Preston PR1 1PX</a>
    </div>
  );
}
