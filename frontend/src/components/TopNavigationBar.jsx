import React, { useContext } from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import { FavoritesContext } from "App";

const TopNavigation = ({ topics, selected, onClick, displayAlert }) => {
  const { setUrl } = useContext(FavoritesContext);

  // Function to handle logo click
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
