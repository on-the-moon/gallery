import React, { useState } from "react";
import photoset from "./flickr api-mock.json";
import styles from "./Gallery.module.css";
import navArrow from "./images/up-arrow.svg";

function Gallery() {
  const flickrList = photoset.photoset.photo;
  const flickrLinks = flickrList.map(
    (image) =>
      `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_b.jpg`
  );
  const [openPopup, setOpenPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState();

  //displays/hides navigation arrows based on currently displayed image index
  const displayNavArrowForward = (index) => {
    return index < flickrLinks.length - 1;
  };

  const displayNavArrowBackward = (index) => {
    return index !== 0;
  };

  //toggles visibility of larger image display & nav arrows
  const togglePopup = (e) => {
    setCurrentImage(e.target.src);
    setOpenPopup(!openPopup);
    console.log("displayNavArrow: ", displayNavArrowForward());
  };

  //updates currently visible image by checking current image index and updating based on clicked arrow
  const nextImage = (e) => {
    e.stopPropagation();
    const currentImageIndex = flickrLinks.indexOf(currentImage);
    setCurrentImage(flickrLinks[currentImageIndex + 1]);
  };

  const lastImage = (e) => {
    e.stopPropagation();
    const currentImageIndex = flickrLinks.indexOf(currentImage);
    setCurrentImage(flickrLinks[currentImageIndex - 1]);
  };

  return (
    <div className={styles.gallery_block}>
      <div className={styles.image_grid}>
        {flickrLinks.map((image) => (
          <img
            src={image}
            key={flickrList.id}
            alt={flickrList.title}
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
          {displayNavArrowBackward(flickrLinks.indexOf(currentImage)) && (
            <img
              src={navArrow}
              alt={flickrList[flickrLinks.indexOf(currentImage)].title}
              className={styles.nav_arrow_back}
              height="200"
              width="200"
              onClick={lastImage}
            />
          )}
          <img
            src={currentImage}
            alt={flickrList[flickrLinks.indexOf(currentImage)].title}
            className={styles.image_popup}
            onClick={(e) => e.stopPropagation()}
          />
          {displayNavArrowForward(flickrLinks.indexOf(currentImage)) && (
            <img
              src={navArrow}
              alt={flickrList[flickrLinks.indexOf(currentImage)].title}
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
