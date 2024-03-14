import React from "react";
import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const photos = new Array(3).fill(null); // Create an array with 3 elements

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className="App">
    {photos.map((_, index) => (
      <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />
    ))}
  </div>
);

export default App;
