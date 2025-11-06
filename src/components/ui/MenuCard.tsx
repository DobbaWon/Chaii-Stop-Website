import styles from "./MenuCard.module.css";

interface MenuCardProps {
  name: string;
  description?: string;
  price: string;
}

export default function MenuCard({ name, description, price }: MenuCardProps) {
  return (
    <div className={styles.menuCard}>
      <div className={styles.header}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.price}>{price}</span>
      </div>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
