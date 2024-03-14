import React from "react";
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props.photo;

  return (
    <div className="photo-item">
      <img src={imageSource} alt="Photograph" className="photo-list__item" />
      <div className="details">
        <img src={profile} alt="Profile" className="profile-pic" />
        <div>{username}</div>
        <div>{location.city}, {location.country}</div>
      </div>
    </div>
  );
};


export default PhotoListItem;
