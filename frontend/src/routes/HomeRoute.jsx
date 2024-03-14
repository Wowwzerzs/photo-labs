import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";

const HomeRoute = ({ photos, topics, setPhotoDetail }) => { // Renamed prop to setPhotoDetail
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const [displayModal, setDisplayModal] = useState(false); // State for modal visibility
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State for selected photo ID
  const [singlePhotoDetail, setSinglePhotoDetail] = useState(null); // State for single photo detail

  const toggleFavorite = (photoId) => {
    if (favoritePhotos.includes(photoId)) {
      setFavoritePhotos(favoritePhotos.filter(id => id !== photoId));
    } else {
      setFavoritePhotos([...favoritePhotos, photoId]);
    }
  };

  const handlePhotoClick = (photo) => { // Modified to receive the entire photo object
    setSelectedPhoto(photo.id);
    setSinglePhotoDetail(photo); // Set the single photo detail
    setDisplayModal(true); // Open the modal
    console.log("Selected Photo Detail:", photo); // Log selected photo detail
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
          closeModal={closeModal}
          singlePhotoDetail={singlePhotoDetail}
        />
      )}
    </div>
  );
};

export default HomeRoute;
