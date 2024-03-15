import React, { useContext, useState } from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import { FavoritesContext } from "App";

const TopNavigation = ({ topics, selected, onClick, displayAlert, favoriteCount }) => {
  const { setUrl } = useContext(FavoritesContext);

  const handleClick = () => {
    setUrl("http://localhost:8001/api/photos/");
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={handleClick}>
        PhotoLabs
      </span>
      <TopicList topics={topics} />
      <FavBadge
        selected={selected}
        handleSelected={onClick}
        displayAlert={displayAlert}
      />
    </div>
  );
};

export default TopNavigation;