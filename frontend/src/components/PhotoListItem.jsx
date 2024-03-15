import React, { useContext } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { FavoritesContext } from "App";

const PhotoListItem = ({ sampleDataForPhotoListItem }) => {
  // Destructure required context values
  const { setShowModal, setActivePhoto, showModal } = useContext(
    FavoritesContext
  );

  // Destructure required data from props
  const {
    id,
    location: { city, country },
    urls: { full },
    user,
  } = sampleDataForPhotoListItem;

  // Function to handle modal click event
  const handleModalClick = () => {
    setShowModal(!showModal); // Toggle the modal visibility
    setActivePhoto(sampleDataForPhotoListItem); // Set active photo for the modal
  };

  return (
    <div className="photo-list__item">
      {/* Render PhotoFavButton component */}
      <PhotoFavButton id={id} />

      {/* Clickable div to trigger modal */}
      <div onClick={handleModalClick}>
        {/* Render photo */}
        <img className="photo-list__image" src={full} alt={user.username} />
        <div className="photo-list__user-details">
          {/* Render user profile image */}
          <img
            className="photo-list__user-profile"
            src={user.profile}
            alt={user.username}
          />
          <div className="photo-list__user-info">
            {/* Render user name */}
            <h2>{user.name}</h2>
            {/* Render user location */}
            <p className="photo-list__user-location">{`${city} ${country}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
