import React, { useContext } from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import { FavoritesContext } from "App";

const PhotoList = () => {
  // Destructure required context values
  const { favorites, isLike, topicListPhotos } = useContext(FavoritesContext);

  // Extract ids from topicListPhotos
  const ids = topicListPhotos.map((el) => el.id);

  // Filter favorites based on ids from topicListPhotos
  const filteredData = favorites.filter((item) => ids.includes(item.id));

  // Filter liked photos from favorites
  const likedPhotos = favorites.filter((photo) => photo.liked);

  // Determine the photos to display based on isLike value
  const currentPhotos = isLike ? likedPhotos : filteredData;

  return (
    <ul className="photo-list">
      {/* Map over currentPhotos to render PhotoListItem components */}
      {currentPhotos.map((data) => (
        <PhotoListItem key={data.id} sampleDataForPhotoListItem={data} />
      ))}
    </ul>
  );
};

export default PhotoList;
