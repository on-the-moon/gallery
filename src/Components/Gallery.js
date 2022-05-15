import React, { useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import album from "./api-mock.json";
import styles from "./Gallery.module.css";
import navArrow from "./images/up-arrow.svg";
function Gallery() {
  const imageList = album.data.images;
  const imageLinks = imageList.map((image) => image.link);
  const [openPopup, setOpenPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState();
  const [isLastImage, setIsLastImage] = useState(false);
  const [isFirstImage, setIsFirstImage] = useState(false);
  const togglePopup = (e) => {
    setOpenPopup(!openPopup);
    setCurrentImage(e.target.src);
    indexIsValid(imageLinks, imageLinks.indexOf(currentImage));
  };
  const indexIsValid = (array, index) => {
    if (index === 0) {
      setIsFirstImage(true);
    } else if (index === array.length - 1) {
      setIsLastImage(true);
    }
  };
  const nextImage = (e) => {
    e.stopPropagation();
    const currentImageIndex = imageLinks.indexOf(currentImage);
    setCurrentImage(imageLinks[currentImageIndex + 1]);
    indexIsValid(imageLinks, currentImageIndex);
  };
  const lastImage = (e) => {
    e.stopPropagation();
    const currentImageIndex = imageLinks.indexOf(currentImage);
    setCurrentImage(imageLinks[currentImageIndex - 1]);
    indexIsValid(imageLinks, currentImageIndex);
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
            src={navArrow}
            className={styles.nav_arrow_back}
            height="200"
            width="200"
            onClick={lastImage}
          />
          <img
            src={currentImage}
            className={styles.image_popup}
            onClick={(e) => e.stopPropagation()}
          />
          <img
            src={navArrow}
            className={styles.nav_arrow_forward}
            height="200"
            width="200"
            onClick={nextImage}
          />
        </div>
      )}
    </div>
  );
}
export default Gallery;
