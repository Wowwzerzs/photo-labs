import React from "react";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

const FavBadge = ({ favoriteCount }) => {
  const displayAlert = favoriteCount > 0;

  return (
    <div className="fav-badge">
      <FavIcon displayAlert={displayAlert} />
    </div>
  );
};

export default FavBadge;
