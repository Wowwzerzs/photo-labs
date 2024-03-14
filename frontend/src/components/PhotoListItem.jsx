import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props;

  return (
    <div className="photo-item">
      <img src={imageSource} alt="Photograph" />
      <div className="details">
        <div>{username}</div>
        <div>{location}</div>
      </div>
      <img src={profile} alt="Profile" className="profile-pic" />
    </div>
  );
};


export default PhotoListItem;
