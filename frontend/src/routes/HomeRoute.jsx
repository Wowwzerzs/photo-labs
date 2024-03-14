import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";

const HomeRoute = ({ photos, topics, setPhotoDetail }) => {
  // State variables
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [singlePhotoDetail, setSinglePhotoDetail] = useState(null);

  // Function to toggle favorite status of a photo
  const toggleFavorite = (photoId) => {
    if (favoritePhotos.includes(photoId)) {
      setFavoritePhotos(favoritePhotos.filter(id => id !== photoId));
    } else {
      setFavoritePhotos([...favoritePhotos, photoId]);
    }
  };

  // Function to handle click on a photo
  const handlePhotoClick = (photo) => {
    setSinglePhotoDetail(photo); // Set the single photo detail when a photo is clicked
    setDisplayModal(true); // Display the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setDisplayModal(false); // Hide the modal
  };

  return (
    <div className="home-route">
      {/* Top navigation bar */}
      <TopNavigationBar topics={topics} favoriteCount={favoritePhotos.length} />
      {/* Photo list component */}
      <PhotoList
        photos={photos}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
        handlePhotoClick={handlePhotoClick}
      />
      {/* Display modal if displayModal state is true */}
      {displayModal && (
        <PhotoDetailsModal
          closeModal={closeModal}
          singlePhotoDetail={singlePhotoDetail}
        />
      )}
    </div>
  );
};

export default HomeRoute;
