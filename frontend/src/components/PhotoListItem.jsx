import React, { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, handleClick }) => {
  const { id, location, urls, user } = photo;
  const { username, profile } = user;
  const { full } = urls;

  const [showModal, setShowModal] = useState(false); // State to control modal display

  const handleModalClick = () => {
    setShowModal(true); // Set showModal state to true to display modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Set showModal state to false to close modal
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton photoId={id} />

      <div onClick={handleModalClick}>
        <img src={full} alt="Photograph" className="photo-list__image" />
        <div className="photo-list__user-details">
          <img src={profile} alt="Profile" className="photo-list__user-profile" />
          <div className="photo-list__user-info">
            <div>{username}</div>
            {location && (
              <div className="photo-list__user-location">{location.city}, {location.country}</div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            {/* Modal content */}
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={full} alt="Photograph" className="modal-image" />
            <div className="modal-user-details">
              <img src={profile} alt="Profile" className="modal-user-profile" />
              <div className="modal-user-info">
                <div>{username}</div>
                {location && (
                  <div className="modal-user-location">{location.city}, {location.country}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoListItem;
