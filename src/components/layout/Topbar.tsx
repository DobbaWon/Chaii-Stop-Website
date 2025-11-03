"use client";

import styles from './Topbar.module.css';

import { usePathname } from 'next/navigation';  

export default function Topbar() {
  const pathname = usePathname();
  const isActive = (href: string): boolean => pathname === href;
  
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
        <a href="/home" className={isActive("/home") ? styles.active : styles.link}>HOME</a>
        <a href="/about" className={isActive("/about") ? styles.active : styles.link}>ABOUT</a>
        <a href="/menu" className={isActive("/menu") ? styles.active : styles.link}>MENU</a>
        <a href="/contact-us" className={isActive("/contact-us") ? styles.active : styles.link}>CONTACT US</a>
      </div>
    </div>
  );
}
