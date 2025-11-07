"use client";

import { useEffect, useState } from "react";
import styles from "./OpeningHours.module.css";
import FadeInSection from "../ui/FadeInSection";
import ImageFlipper from "../ui/ImageFlipper";

export default function OpeningHours() {
  const hours = [
    { day: "Monday", time: "9:00 AM - 9:00 PM" },
    { day: "Tuesday", time: "9:00 AM - 9:00 PM" },
    { day: "Wednesday", time: "9:00 AM - 9:00 PM" },
    { day: "Thursday", time: "9:00 AM - 9:00 PM" },
    { day: "Friday", time: "9:00 AM - 10:30 PM" },
    { day: "Saturday", time: "9:00 AM - 10:30 PM" },
    { day: "Sunday", time: "9:00 AM - 9:00 PM" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpen = () => {
      const now = new Date();

      // Map JS getDay() (0=Sun,..6=Sat) to hours array index (0=Mon,..6=Sun)
      const dayIndexMap = [6, 0, 1, 2, 3, 4, 5];
      const dayIndex = dayIndexMap[now.getDay()];

      const dayHours = hours[dayIndex].time.split(" - ");

      const parseTime = (str: string) => {
        const [time, period] = str.split(" ");
        let [hours, minutes] = time.split(":").map(Number);
        if (period === "PM" && hours !== 12) hours += 12;
        if (period === "AM" && hours === 12) hours = 0;
        return { hours, minutes };
      };

      const start = parseTime(dayHours[0]);
      const end = parseTime(dayHours[1]);

      const nowMinutes = now.getHours() * 60 + now.getMinutes();
      const startMinutes = start.hours * 60 + start.minutes;
      const endMinutes = end.hours * 60 + end.minutes;

      setIsOpen(nowMinutes >= startMinutes && nowMinutes < endMinutes);
    };

    checkOpen();
    const interval = setInterval(checkOpen, 60 * 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.content}>
      <div className={styles.hoursSection}>
        <h2 className={styles.title}>
          Opening Hours
          <span
            className={`${styles.status} ${isOpen ? styles.open : styles.closed}`}
          >
            {isOpen ? "Open Now" : "Closed"}
          </span>
        </h2>

        <div className={styles.hoursList}>
          {hours.map((entry) => (
            <div key={entry.day} className={styles.hourRow}>
              <span className={styles.day}>{entry.day}</span>
              <span className={styles.time}>{entry.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.rightSide}>
      <div className={styles.imageGallery}>
        <div className={styles.rowOne}>
          <FadeInSection delay={0.2}>
            <div className={styles.imageOne}>
              <ImageFlipper
                imageSrc='/images/donutsTwo.jpg'
                title="Sweet Donuts"
                description="Freshly baked donuts with a soft, fluffy interior and a sugary glaze."
                width='150px'
                height='150px'
              />
            </div>
          </FadeInSection>

          <FadeInSection delay={0.4}>
            <div className={styles.imageTwo}>
              <ImageFlipper
                imageSrc='/images/poutine.jpg'
                title="Classic Poutine"
                description=""
                width='150px'
                height='150px'
              />
            </div>
          </FadeInSection>
        </div>

        <div className={styles.rowTwo}>
          <FadeInSection delay={0.6}>
            <div className={styles.imageThree}>
              <ImageFlipper
                imageSrc='/images/samosaThree.jpg'
                title="Crispy Samosa"
                description=""
                width='150px'
                height='150px'
              />
            </div>
          </FadeInSection>

          <FadeInSection delay={0.8}>
            <div className={styles.imageFour}>
              <ImageFlipper
                imageSrc='/images/lotusCake.jpg'
                title="Lotus Cake"
                description=""
                width='150px'
                height='150px'
              />
            </div>
          </FadeInSection>
        </div>

        <div className={styles.rowTwo}>
          <FadeInSection delay={1}>
            <div className={styles.imageFive}>
              <ImageFlipper
                imageSrc='/images/masala.jpg'
                title="Masala"
                description=""
                width='150px'
                height='150px'
              />
            </div>
          </FadeInSection>

          <FadeInSection delay={1.2}>
            <div className={styles.imageSix}>
              <ImageFlipper
                imageSrc='/images/tostones.jpg'
                title="Tostones"
                description=""
                width='150px'
                height='150px'
              />
            </div>
          </FadeInSection>
        </div>
      </div>
        <div className={styles.contact}>
          <a href="https://www.google.com/maps/place/Chaii+Stop/@53.7676435,-2.6989896,17z/data=!3m1!4b1!4m6!3m5!1s0x487b733a6e4fc43b:0x538645d28f41e0d0!8m2!3d53.7676435!4d-2.6964147!16s%2Fg%2F11q3m97892?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">📍169 St Paul's Rd, Deepdale, Preston PR1 1PX</a>
          <a href='tel:01772846558' className={styles.phone}>📞01772 846558</a>
        </div>
      </div>
    </div>
  );
}
