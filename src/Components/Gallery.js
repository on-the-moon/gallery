import React, { useState } from "react";
import album from "./api-mock.json";
import styles from "./Gallery.module.css";
import navArrow from "./images/up-arrow.svg";
function Gallery() {
  const imageList = album.data.images;
  const imageLinks = imageList.map((image) => image.link);
  const [openPopup, setOpenPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState();

  //boolean checks for conditionally rendering navigation arrows

  const displayNavArrowForward = (index) => {
    return index < imageLinks.length - 1;
  };

  const displayNavArrowBackward = (index) => {
    return index !== 0;
  };

  const togglePopup = (e) => {
    setCurrentImage(e.target.src);
    setOpenPopup(!openPopup);
    console.log("displayNavArrow: ", displayNavArrowForward());
  };

  //update currentImage by checking index and updating +1 or -1

  const nextImage = (e) => {
    e.stopPropagation();
    const currentImageIndex = imageLinks.indexOf(currentImage);
    setCurrentImage(imageLinks[currentImageIndex + 1]);
  };

  const lastImage = (e) => {
    e.stopPropagation();
    const currentImageIndex = imageLinks.indexOf(currentImage);
    setCurrentImage(imageLinks[currentImageIndex - 1]);
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
      {/* conditionally render full image on openPopup check */}
      {openPopup && (
        <div
          className={styles.image_popup_box}
          onClick={() => setOpenPopup(!openPopup)}
        >
          {/* conditionally render navigation arrow based on function return value */}
          {displayNavArrowBackward(imageLinks.indexOf(currentImage)) && (
            <img
              src={navArrow}
              className={styles.nav_arrow_back}
              height="200"
              width="200"
              onClick={lastImage}
            />
          )}
          <img
            src={currentImage}
            className={styles.image_popup}
            onClick={(e) => e.stopPropagation()}
          />
          {/* conditionally render navigation arrow based on function return value */}
          {displayNavArrowForward(imageLinks.indexOf(currentImage)) && (
            <img
              src={navArrow}
              className={styles.nav_arrow_forward}
              height="200"
              width="200"
              onClick={nextImage}
            />
          )}
        </div>
      )}
    </div>
  );
}
export default Gallery;
