import React, { useContext, useMemo, useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import { FavoritesContext } from "App";

function PhotoFavButton({ id }) {
  const [selected, setSelected] = useState(false);
  const { favorites, setFavorites, photoData } = useContext(FavoritesContext);

  const selectedPhoto = useMemo(() => {
    return photoData.filter((photo) => {
      return photo.id === id;
    });
  });

  const handleSelected = () => {
    setSelected((prev) => !prev);

    selectedPhoto[0].liked = !selected;
    setFavorites(() => [...favorites]);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          selected={selectedPhoto[0].liked}
          handleSelected={handleSelected}
          isFavPhotoExist={""}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;