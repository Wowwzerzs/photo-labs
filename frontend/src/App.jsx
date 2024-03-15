import React, { createContext } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

// Create the FavoritesContext
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
        {/* Render both HomeRoute and PhotoDetailsModal within the FavoritesContext.Provider */}
        <HomeRoute topics={topics} />
        {showModal && <PhotoDetailsModal singlePhotoDetail={activePhoto} closeModal={() => setShowModal(false)} />}
      </FavoritesContext.Provider>
    </div>
  );
};

export default App;
