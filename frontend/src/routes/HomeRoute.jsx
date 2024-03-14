// frontend/src/routes/HomeRoute.jsx
import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal"; // Import the PhotoDetailsModal component

const HomeRoute = ({ photos, topics }) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State to store the selected photo ID

  const toggleFavorite = (photoId) => {
    if (favoritePhotos.includes(photoId)) {
      setFavoritePhotos(favoritePhotos.filter(id => id !== photoId));
    } else {
      setFavoritePhotos([...favoritePhotos, photoId]);
    }
  };

  const handlePhotoClick = (photoId) => {
    setSelectedPhoto(photoId); // Set the selected photo ID
    setShowModal(true); // Show the modal
  };

  const closeModal = () => {
    setShowModal(false); // Hide the modal
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favoriteCount={favoritePhotos.length} />
      <PhotoList
        photos={photos}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
        handlePhotoClick={handlePhotoClick} // Pass the handlePhotoClick function
      />
      {showModal && (
        <PhotoDetailsModal
          photoId={selectedPhoto}
          closeModal={closeModal} // Pass the closeModal function
        />
      )}
    </div>
  );
};

export default HomeRoute;
