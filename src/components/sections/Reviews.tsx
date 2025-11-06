"use client";

import { useState, useEffect } from "react";
import styles from "./Reviews.module.css";
import ReviewCard from "../../components/ui/ReviewCard";
import FadeInSection from "../../components/ui/FadeInSection";

export default function Reviews() {
  const reviews = [
    { name: "Ava Patel", date: "Oct 12, 2025", review: "Absolutely loved the chai and cozy atmosphere!", rating: 5 },
    { name: "Leo Nguyen", date: "Oct 18, 2025", review: "Great customer service and perfect desserts.", rating: 4 },
    { name: "Sofia Morales", date: "Oct 20, 2025", review: "The samosas were amazing. Will come again!", rating: 5 },
    { name: "Daniel Kim", date: "Oct 25, 2025", review: "Loved the donuts — fresh and soft!", rating: 5 },
    { name: "Emily Carter", date: "Oct 27, 2025", review: "A relaxing place to grab a coffee and unwind.", rating: 4 },
    { name: "Noah Singh", date: "Oct 29, 2025", review: "Great food, but the wait time could be shorter.", rating: 3 },
  ];

  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Dynamically update visibleCount based on window width
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1200) setVisibleCount(3);  // Desktop
      else if (width >= 768) setVisibleCount(2); // Tablet
      else setVisibleCount(1); // Mobile
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const next = () => {
    if (index + visibleCount < reviews.length) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  // Calculate track width and translateX dynamically
  const trackStyle = {
    transform: `translateX(-${(index / reviews.length) * 100}%)`,
    width: `${(reviews.length / visibleCount) * 100}%`,
  };

  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.title}>Customer Reviews</h2>

      <div className={styles.carouselContainer}>
        <button className={styles.arrow} onClick={prev} disabled={index === 0}>
          &#8592;
        </button>

        <div className={styles.carousel}>
          <div className={styles.track} style={trackStyle}>
            {reviews.map((r, i) => (
              <FadeInSection key={i}>
                <div className={styles.cardWrapper} style={{ flex: `0 0 ${100 / visibleCount}%` }}>
                  <ReviewCard
                    name={r.name}
                    date={r.date}
                    review={r.review}
                    rating={r.rating}
                  />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>

        <button
          className={styles.arrow}
          onClick={next}
          disabled={index + visibleCount >= reviews.length}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
