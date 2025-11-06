import styles from './AboutUs.module.css';
import ImageFlipper from '../../ui/ImageFlipper';

export default function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.textSection}>
        <h2 className={styles.title}>ABOUT US</h2>
        <h1 className={styles.subtitle}>Chaii Stop - Bringing people together, one cup at a time</h1>
        <p>
          Proudly Preston. We take our atmousphere seriously here at Chaii Stop, setting a challenge to our customers to go Phone-Free during their visit to our cafe. We reward those customers with 20% off their order.
        </p>
        <p>
          We are a Palestine-supporting Cafe. Engaging with the community is a priority for us at Chaii Stop, appearing at UCL Student Fairs, and ensuring our Cafe always emits positive energy and good vibes! 
        </p>
      </div>

      <div className={styles.imageGallery}>
        <div className={styles.rowOne}>
          <div className={styles.imageOne}>
            <ImageFlipper
              imageSrc='/images/donuts.jpg'
              title="Sweet Donuts"
              description="Freshly baked donuts with a soft, fluffy interior and a sugary glaze."
              width='300px'
              height='300px'
            />
          </div>

          <div className={styles.imageTwo}>
            <ImageFlipper
              imageSrc='/images/poutine.jpg'
              title="Classic Poutine"
              description="Crispy fries topped with rich gravy and melted cheese curds, a comfort food favorite."
              width='300px'
              height='300px'
            />
          </div>
        </div>

        <div className={styles.rowTwo}>
          <div className={styles.imageThree}>
            <ImageFlipper
              imageSrc='/images/samosa.jpg'
              title="Crispy Samosa"
              description="Golden, crunchy pastry filled with spiced potatoes and peas, perfect as a snack."
              width='300px'
              height='300px'
            />
          </div>

          <div className={styles.imageFour}>
            <ImageFlipper
              imageSrc='/images/lotusCake.jpg'
              title="Lotus Cake"
              description="Moist sponge cake layered with creamy lotus spread and a hint of caramel."
              width='300px'
              height='300px'
            />
          </div>
        </div>
      </div>


    </div>
  );
}
