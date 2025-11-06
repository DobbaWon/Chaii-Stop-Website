"use client";

import { useState } from "react";
import styles from "./Reviews.module.css";
import ReviewCard from "../../../components/ui/ReviewCard";
import FadeInSection from "../../../components/ui/FadeInSection";

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
  const visibleCount = 3;

  const next = () => {
    if (index + visibleCount < reviews.length) setIndex(index + 1);
  };

  const prev = () => {
    if (index - 1 >= 0) setIndex(index - 1);
  };

  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.heading}>Customer Reviews</h2>

      <div className={styles.carouselContainer}>
        <button className={styles.arrow} onClick={prev} disabled={index === 0}>
          &#8592;
        </button>

        <div className={styles.carousel}>
          <div
            className={styles.track}
            style={{ transform: `translateX(-${(index / visibleCount) * 100}%)` }}
          >
            {reviews.map((r, i) => (
              <FadeInSection>
                <div key={i} className={styles.cardWrapper}>
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
          disabled={index + 0 >= reviews.length - visibleCount}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
