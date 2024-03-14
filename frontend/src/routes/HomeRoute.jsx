import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({ photos, topics }) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

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
      <PhotoList photos={photos} toggleFavorite={toggleFavorite} favoritePhotos={favoritePhotos} />
    </div>
  );
};

export default HomeRoute;
