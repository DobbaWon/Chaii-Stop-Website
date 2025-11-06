"use client"

import { useState } from 'react';
import styles from './MobileImageGallery.module.css';

export default function MobileImageGallery() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleGallery = () => setIsOpen(!isOpen);

  return (
    <div className={styles.mobileGalleryContainer}>
      {/* Clickable title */}
      <h2
        className={styles.toggleTitle}
        onClick={toggleGallery}
      >
        {isOpen ? 'Hide Gallery ▲' : 'Show Gallery ▼'}
      </h2>

      {/* Images container, hidden by default */}
      <div className={`${styles.mobileGallery} ${isOpen ? styles.open : ''}`}>
        <div className={styles.imageWrapper}>
          <img src="/images/donuts.jpg" alt="Sweet Donuts" className={styles.image} />
          <div className={styles.overlay}>
            <h3>Sweet Donuts</h3>
            <p>Freshly baked donuts with a soft, fluffy interior and a sugary glaze.</p>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img src="/images/poutine.jpg" alt="Classic Poutine" className={styles.image} />
          <div className={styles.overlay}>
            <h3>Classic Poutine</h3>
            <p>Crispy fries topped with rich gravy and melted cheese curds.</p>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img src="/images/samosa.jpg" alt="Crispy Samosa" className={styles.image} />
          <div className={styles.overlay}>
            <h3>Crispy Samosa</h3>
            <p>Golden, crunchy pastry filled with spiced potatoes and peas.</p>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img src="/images/lotusCake.jpg" alt="Lotus Cake" className={styles.image} />
          <div className={styles.overlay}>
            <h3>Lotus Cake</h3>
            <p>Moist sponge cake layered with creamy lotus spread and a hint of caramel.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
