import React, { useContext } from "react";
import "../styles/PhotoDetailsModal.scss";
import "../styles/PhotoListItem.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import { FavoritesContext } from "App";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

// PhotoDetailsModal component
const PhotoDetailsModal = ({ data }) => {
  // Access setShowModal function from FavoritesContext
  const { setShowModal } = useContext(FavoritesContext);

  // Destructure data object
  const { photo2, photo3, photo4, photo5 } = data.similar_photos;
  const {
    id,
    location: { city, country },
    urls: { regular },
    user,
  } = data;

  return (
    <div className="photo-details-modal">
      {/* Close button */}
      <button
        className="photo-details-modal__close-button"
        onClick={() => setShowModal(false)}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* Render PhotoFavButton */}
      <PhotoFavButton id={id} />
      {/* Display main image */}
      <img
        src={regular}
        alt={user.username}
        className="photo-details-modal__image"
      />
      {/* Display user details */}
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user.profile}
          alt={user.username}
        />
        <div className="photo-list__user-info">
          <h2>{user.name}</h2>
          <p className="photo-list__user-location">{`${city} ${country}`}</p>
        </div>
      </div>
      {/* Display similar photos */}
      <div className="photo-details-modal__images">
        <h2 style={{ marginLeft: "30px" }}>Similar photos</h2>
        {/* Render PhotoList component */}
        <PhotoList
          photos={[photo2, photo3, photo4, photo5]}
          className="photo-details-modal__images"
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
