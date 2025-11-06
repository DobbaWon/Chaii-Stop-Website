import styles from './home.module.css';
import Banner from '@/src/components/sections/Banner';
import AboutUs from '@/src/components/sections/AboutUs';
import Reviews from '@/src/components/sections/Reviews';
import Menu from '@/src/components/sections/Menu'
import OpeningHours from '@/src/components/sections/OpeningHours';
import MobileImageGallery from '@/src/components/sections/MobileImageGallery';


export default function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Reviews />
      <Menu />
      <div className={styles.mobileOnly}>
        <MobileImageGallery />
      </div>
      <OpeningHours />
    </div>
  );
}
