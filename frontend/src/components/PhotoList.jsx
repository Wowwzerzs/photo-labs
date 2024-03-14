// frontend/src/components/PhotoList.jsx
import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, toggleFavorite, favoritePhotos, setShowModal, setSelectedPhoto }) => {
  const handleClick = (photoId) => {
    setSelectedPhoto(photoId); // Set the selected photo ID
    setShowModal(true); // Show the modal
  };

  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavorite={favoritePhotos.includes(photo.id)}
          toggleFavorite={toggleFavorite}
          handleClick={handleClick} // Pass the handleClick function
        />
      ))}
    </ul>
  );
};

export default PhotoList;
