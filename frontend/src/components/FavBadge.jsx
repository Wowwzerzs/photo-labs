import React from "react";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

const FavBadge = ({ displayAlert, selected, handleSelected }) => {
  return (
    <div className="fav-badge">
      <FavIcon
        displayAlert={displayAlert}
        selected={selected}
        handleSelected={handleSelected}
      />
    </div>
  );
};

export default FavBadge;