import styles from "./ReviewCard.module.css";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  date: string;
  review: string;
  rating?: number; // default 5
}

export default function ReviewCard({ name, date, review, rating = 5 }: ReviewCardProps) {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.stars}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={i < rating ? styles.starFilled : styles.starEmpty}
            size={20}
          />
        ))}
      </div>
      <p className={styles.reviewText}>"{review}"</p>
      <div className={styles.footer}>
        <span className={styles.name}>— {name}</span>
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
}
