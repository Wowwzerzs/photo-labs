import React, { createContext, useState } from "react";
import "./App.scss";
import "./index.css";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

// Create context for favorites
export const FavoritesContext = createContext(null);

// Main App component
const App = () => {
  // Destructure values from custom hook useApplicationData
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
      {/* Provide favorites context to nested components */}
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
        {/* Render PhotoDetailsModal if showModal is true */}
        {showModal && <PhotoDetailsModal data={activePhoto} />}
        {/* Render HomeRoute with topics and favorites */}
        <HomeRoute topics={topics} photos={favorites} />
      </FavoritesContext.Provider>
    </div>
  );
};

export default App;
