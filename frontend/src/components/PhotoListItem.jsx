import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props;

  return (
    <div className="photo-item">
      <img src={imageSource} alt="Photograph" />
      <img src={profile} alt="Profile" className="profile-pic" />
      <div className="details">
        <div>{username}</div>
        <div>{location}</div>
      </div>
    </div>
  );
};


export default PhotoListItem;
