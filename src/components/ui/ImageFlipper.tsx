import React from "react";
import styles from "./ImageFlipper.module.css";

interface ImageFlipperProps {
  imageSrc: string;
  title: string;
  description: string;
  width?: string;  // optional width
  height?: string; // optional height
}

const ImageFlipper: React.FC<ImageFlipperProps> = ({
  imageSrc,
  title,
  description,
  width = "300px",
  height = "300px",
}) => {
  // Parse width and height to numbers (strip 'px')
  const numericWidth = parseInt(width, 10);
  const numericHeight = parseInt(height, 10);

  // Determine if description should be shown
  const showDescription = numericWidth >= 151 && numericHeight >= 151;

  return (
    <div
      className={styles.flipContainer}
      style={{ width, height }}
    >
      <div className={styles.flipper}>
        <div className={styles.front}>
          <img src={imageSrc} alt={title} />
        </div>
        <div className={styles.back}>
          <h2>{title}</h2>
          {showDescription && <p>{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default ImageFlipper;
