import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

const FavBadge = ({ favoriteCount }) => {
  const [selected, setSelected] = useState(false);

  const displayAlert = favoriteCount > 0;

  const handleSelected = () => {
    setSelected(!selected);
  };

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
