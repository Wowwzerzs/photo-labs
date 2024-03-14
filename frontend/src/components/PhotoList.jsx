import React from 'react';
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, toggleFavorite, favoritePhotos }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavorite={favoritePhotos.includes(photo.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
