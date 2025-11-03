"use client";

import styles from './Topbar.module.css';

import { useState } from 'react';

export default function Topbar() {
  const [currentPage, setCurrentPage] = useState('home');
  
  return (
    <div className={styles.topbar}>
      <a href="/home">
        <img
          className={styles.logo}
          src="/icons/chaii-stop-icon.jpg"
          alt="Cafe Logo"
        />
      </a>

      <div className={styles.navLinks}>
        <a href="/home" className={styles.link}>HOME</a>
        <a href="/about" className={styles.link}>ABOUT</a>
        <a href="/menu" className={styles.link}>MENU</a>
        <a href="/contact-us" className={styles.link}>CONTACT US</a>
      </div>

    </div>
  );
}
