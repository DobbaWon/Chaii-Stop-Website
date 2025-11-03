import './home.module.css';
import Banner from '@/src/components/sections/Home/Banner';
import AboutUs from '@/src/components/sections/Home/AboutUs';
import Reviews from '@/src/components/sections/Home/Reviews';
import WhyChooseUs from '@/src/components/sections/Home/WhyChooseUs';


export default function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Reviews />
      <WhyChooseUs />
    </div>
  );
}
