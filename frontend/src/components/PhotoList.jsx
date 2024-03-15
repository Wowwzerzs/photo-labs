import React, { useContext } from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import { FavoritesContext } from "App";

const PhotoList = () => {
  // Accessing favorites, isLike, and topicListPhotos from FavoritesContext
  const { favorites, isLike, topicListPhotos } = useContext(FavoritesContext);

  // Filtering photos based on context data
  const ids = topicListPhotos.map((el) => el.id); // Extracting ids from topicListPhotos
  const filteredData = favorites.filter((item) => ids.includes(item.id)); // Filtering favorites based on ids
  const likedPhotos = favorites.filter((photo) => photo.liked); // Filtering favorites for liked photos
  const currentPhotos = isLike ? likedPhotos : filteredData.length > 0 ? filteredData : favorites; // Choosing photos based on isLike flag or using favorites as fallback

  return (
    // Rendering the list of photos
    <ul className="photo-list">
      {currentPhotos.map((data) => (
        // Mapping through currentPhotos to render each PhotoListItem
        <PhotoListItem key={data.id} sampleDataForPhotoListItem={data} />
      ))}
    </ul>
  );
};

export default PhotoList;

