import React, { createContext, useState } from "react";
import "./App.scss";
import "./index.css";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

export const FavoritesContext = createContext(null);
const App = () => {
  const {
    favorites,
    setFavorites,
    activePhoto,
    setActivePhoto,
    showModal,
    setShowModal,
    isLike,
    setIsLike,
    photoData,
    topics,
    setUrl,
    topicListPhotos,
  } = useApplicationData();

  return (
    <div className="App">
      <FavoritesContext.Provider
        value={{
          favorites,
          setFavorites,
          isLike,
          setIsLike,
          setActivePhoto,
          setShowModal,
          activePhoto,
          photoData,
          topics,
          setUrl,
          topicListPhotos,
        }}
      >
        {" "}
        {showModal && <PhotoDetailsModal data={activePhoto} />}
        <HomeRoute topics={topics} photos={favorites} />
      </FavoritesContext.Provider>
    </div>
  );
};

export default App;