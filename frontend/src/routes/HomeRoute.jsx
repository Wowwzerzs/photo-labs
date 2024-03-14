import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";

const HomeRoute = ({ photos, topics }) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const [displayModal, setDisplayModal] = useState(false); // State for modal visibility
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State for selected photo ID

  const toggleFavorite = (photoId) => {
    if (favoritePhotos.includes(photoId)) {
      setFavoritePhotos(favoritePhotos.filter(id => id !== photoId));
    } else {
      setFavoritePhotos([...favoritePhotos, photoId]);
    }
  };

  const handlePhotoClick = (photoId) => {
    setSelectedPhoto(photoId);
    setDisplayModal(true); // Open the modal
    console.log("Selected Photo ID:", photoId); // Log selected photo ID
  };

  const closeModal = () => {
    setDisplayModal(false); // Close the modal
    console.log("Modal Closed"); // Log modal closure
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favoriteCount={favoritePhotos.length} />
      <PhotoList
        photos={photos}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
        handlePhotoClick={handlePhotoClick}
      />
      {displayModal && (
        <PhotoDetailsModal
          photoId={selectedPhoto}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default HomeRoute;
