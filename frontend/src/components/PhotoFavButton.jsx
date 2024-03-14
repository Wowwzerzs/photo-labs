import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [selected, setSelected] = useState(false); // State to manage whether the photo is favorited or not

  const toggleFav = () => {
    setSelected(prevSelected => !prevSelected);
  };

  return (
    <div className="photo-fav-button__container" onClick={toggleFav}>
      <div className="photo-fav-button__svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;