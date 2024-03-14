import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal"; 
import photos from "./mocks/photos";
import topics from "./mocks/topics";

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [singlePhotoDetail, setSinglePhotoDetail] = useState(null); // State for single photo details

  const closeModal = () => {
    setDisplayModal(false);
    console.log("Modal Closed"); // Log modal closure
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        setDisplayModal={setDisplayModal}
        setSinglePhotoDetail={setSinglePhotoDetail} // Pass the setSinglePhotoDetail function
      />
      {displayModal && (
        <PhotoDetailsModal
          closeModal={closeModal}
          singlePhotoDetail={singlePhotoDetail} // Pass the singlePhotoDetail state
        />
      )}
    </div>
  );
};

export default App;
