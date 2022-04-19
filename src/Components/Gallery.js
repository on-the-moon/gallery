import React, { useState } from "react";
import album from "./api-mock.json";
function Gallery() {
  const [imageList, setImageList] = useState(album.data.images);
  console.log("album", album);
  console.log("imageList", imageList);

  return (
    <div className="image-grid">
      {imageList.map((album) => (
        <img src={album.link} key={album.id} alt={album.id}></img>
      ))}
    </div>
  );
}
export default Gallery;
