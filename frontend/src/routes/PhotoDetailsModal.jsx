import React, { useContext } from "react";
import "../styles/PhotoDetailsModal.scss";
import "../styles/PhotoListItem.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import { FavoritesContext } from "App";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({ data }) => {
  const { setShowModal } = useContext(FavoritesContext);

  const { photo2, photo3, photo4, photo5 } = data.similar_photos;

  const {
    id,
    location: { city, country },
    urls: { regular },
    user,
  } = data;

  return (
    <div className="photo-details-modal ">
      <button
        className="photo-details-modal__close-button"
        onClick={() => setShowModal(false)}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton id={id} />
      <img
        src={regular}
        alt={user.username}
        className="photo-details-modal__image "
      />

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

      <div className="photo-details-modal__images">
        <h2 style={{ marginLeft: "30px" }}>Similar photos</h2>
        <PhotoList
          photos={[photo2, photo3, photo4, photo5]}
          className="photo-details-modal__images"
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;