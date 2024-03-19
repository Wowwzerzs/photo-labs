import React, { useContext, useMemo, useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import { FavoritesContext } from "App";

function PhotoFavButton({ id }) {
  const [selected, setSelected] = useState(false);
  const { favorites, setFavorites, photoData } = useContext(FavoritesContext);

  // Memoized selected photo based on id
  const selectedPhoto = useMemo(() => {
    return photoData.filter((photo) => photo.id === id);
  }, [id, photoData]);

  // Function to handle button click
  const handleSelected = () => {
    setSelected((prev) => !prev);
    selectedPhoto[0].liked = !selected; // Update the liked status of the selected photo
    setFavorites(() => [...favorites]); // Update favorites state with the modified photo data
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
