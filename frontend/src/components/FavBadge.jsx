import React from "react";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

/**
 * FavBadge component displays a badge containing a favorite button icon.
 * @param {boolean} displayAlert - Controls whether to display an alert circle next to the icon.
 * @param {boolean} selected - Determines whether the icon should be filled with a red color (indicating it's selected) or with a light gray color.
 * @param {function} handleSelected - Function triggered when the icon is clicked, toggling the selection status.
 * @returns {JSX.Element} - FavBadge component JSX markup.
 */
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
