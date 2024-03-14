import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ photoId }) {
  const [selected, setSelected] = useState(false);

  const toggleFav = () => {
    setSelected((prevSelected) => !prevSelected);
    // Here you can handle your logic for toggling the favorite status based on photoId
  };

  return (
    <div className="photo-list__fav-icon" onClick={toggleFav}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
