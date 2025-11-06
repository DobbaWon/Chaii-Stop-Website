import './home.module.css';
import Banner from '@/src/components/sections/Home/Banner';
import AboutUs from '@/src/components/sections/Home/AboutUs';
import Reviews from '@/src/components/sections/Home/Reviews';


export default function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Reviews />
    </div>
  );
}
