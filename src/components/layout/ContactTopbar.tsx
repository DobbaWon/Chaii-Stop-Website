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

      <a href="https://www.google.com/maps/place/Chaii+Stop/@53.7676435,-2.6989896,17z/data=!3m1!4b1!4m6!3m5!1s0x487b733a6e4fc43b:0x538645d28f41e0d0!8m2!3d53.7676435!4d-2.6964147!16s%2Fg%2F11q3m97892?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">📍169 St Paul's Rd, Deepdale, Preston PR1 1PX</a>
    </div>
  );
}
