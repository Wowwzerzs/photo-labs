import React, { useContext, useMemo, useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import { FavoritesContext } from "App";

function PhotoFavButton({ photoId }) {
  const [selected, setSelected] = useState(false);
  const { favorites, setFavorites, photoData } = useContext(FavoritesContext);

  const selectedPhoto = useMemo(() => {
    return photoData.filter((photo) => {
      return photo.id === photoId;
    });
  }, [photoData, photoId]);

  const toggleFav = () => {
    setSelected((prev) => !prev);

    const updatedFavorites = favorites.map((fav) => {
      if (fav.id === photoId) {
        return { ...fav, liked: !selected };
      }
      return fav;
    });

    setFavorites(updatedFavorites);
  };

  return (
    <div className="photo-list__fav-icon" onClick={toggleFav}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          selected={selectedPhoto.length > 0 ? selectedPhoto[0].liked : false}
          handleSelected={toggleFav}
          isFavPhotoExist={selectedPhoto.length > 0}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
