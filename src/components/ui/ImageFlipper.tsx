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
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageFlipper;
