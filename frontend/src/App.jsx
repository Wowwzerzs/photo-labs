// App.jsx
import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal"; // Import the PhotoDetailsModal component
import photos from "./mocks/photos";
import topics from "./mocks/topics";

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setDisplayModal={setDisplayModal} />
      {displayModal && <PhotoDetailsModal closeModal={closeModal} />}
    </div>
  );
};

export default App;
