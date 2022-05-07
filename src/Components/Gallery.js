import React, { useState } from "react";
import album from "./api-mock.json";
import styles from "./Gallery.module.css";
function Gallery() {
  const imageList = album.data.images;
  const [openPopup, setOpenPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState();
  const togglePopup = (e) => {
    setOpenPopup(!openPopup);
    setCurrentImage(e.target.src);
  };

  return (
    <div className={styles.gallery_block}>
      <div className={styles.image_grid}>
        {imageList.map((image) => (
          <img
            src={image.link}
            key={image.id}
            alt={image.description}
            className={styles.images}
            onClick={togglePopup}
          />
        ))}
      </div>
      {openPopup && (
        <div
          className={styles.image_popup_box}
          onClick={() => setOpenPopup(!openPopup)}
        >
          <img
            src={currentImage}
            className={styles.image_popup}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
export default Gallery;
