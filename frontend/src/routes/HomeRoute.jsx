// frontend/src/routes/HomeRoute.jsx
import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";

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

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favoriteCount={favoritePhotos.length} />
      <PhotoList
        photos={photos}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
        setShowModal={setShowModal} // Pass setShowModal function
        setSelectedPhoto={setSelectedPhoto} // Pass setSelectedPhoto function
      />
      {showModal && <PhotoDetailsModal />} {/* Render the modal if showModal state is true */}
    </div>
  );
};

export default HomeRoute;
