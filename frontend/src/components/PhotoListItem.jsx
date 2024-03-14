// frontend/src/components/PhotoListItem.jsx
import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, handleClick }) => {
  const { id, location, urls, user } = photo;
  const { username, profile } = user;
  const { full } = urls;

  return (
    <div className="photo-list__item" onClick={() => handleClick(id)}> {/* Call handleClick function on click */}
      <div className="photo-list__fav-icon">
        <PhotoFavButton photoId={id} />
      </div>
      <img src={full} alt="Photograph" className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt="Profile" className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <div>{username}</div>
          <div className="photo-list__user-location">{location.city}, {location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
