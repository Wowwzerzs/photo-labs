import React, { useContext, useMemo, useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import { FavoritesContext } from "App";

function PhotoFavButton({ id }) {
  // State to manage the selection status of the button
  const [selected, setSelected] = useState(false);

  // Destructuring required context values
  const { favorites, setFavorites, photoData } = useContext(FavoritesContext);

  // Memoized selected photo based on id
  const selectedPhoto = useMemo(() => {
    return photoData.filter((photo) => photo.id === id);
  }, [id, photoData]);

  // Function to handle button click
  const handleSelected = () => {
    // Toggle the selection status
    setSelected((prev) => !prev);

    // Update the liked status of the selected photo
    selectedPhoto[0].liked = !selected;
    
    // Update favorites state with the modified photo data
    setFavorites(() => [...favorites]);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {/* Render FavIcon component with appropriate props */}
        <FavIcon
          selected={selectedPhoto[0].liked}
          handleSelected={handleSelected}
          isFavPhotoExist={""} // I'm not sure about this prop, so I left it as is
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
