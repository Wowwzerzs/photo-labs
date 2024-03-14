import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal"; 
import photos from "./mocks/photos";
import topics from "./mocks/topics";

const App = () => {
  const [displayModal, setDisplayModal] = useState(false); // State for modal visibility

  const closeModal = () => {
    setDisplayModal(false); // Close the modal
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setDisplayModal={setDisplayModal} />
      {displayModal && <PhotoDetailsModal closeModal={closeModal} />} {/* Conditionally render modal */}
    </div>
  );
};

export default App;
