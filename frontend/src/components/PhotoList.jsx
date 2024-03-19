import React, { useContext } from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import { FavoritesContext } from "App";

const PhotoList = () => {
  const { favorites, isLike, topicListPhotos } = useContext(FavoritesContext);
  const ids = topicListPhotos.map((el) => el.id);
  const filteredData = favorites.filter((item) => ids.includes(item.id));
  const likedPhotos = favorites.filter((photo) => photo.liked);
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
