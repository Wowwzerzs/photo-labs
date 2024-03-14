import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal"; 
import photos from "./mocks/photos";
import topics from "./mocks/topics";

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const closeModal = () => {
    setDisplayModal(false);
    console.log("Modal Closed"); // Log modal closure
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setDisplayModal={setDisplayModal} />
      {displayModal && <PhotoDetailsModal closeModal={closeModal} />}
    </div>
  );
};

export default App;
