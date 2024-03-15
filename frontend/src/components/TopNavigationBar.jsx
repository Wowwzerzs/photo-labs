import React, { useContext } from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import { FavoritesContext } from "App";

// TopNavigation component
const TopNavigation = ({ topics, selected, onClick, displayAlert }) => {
  // Access setUrl function from FavoritesContext
  const { setUrl } = useContext(FavoritesContext);

  // Function to handle logo click
  const handleClick = () => {
    // Set URL when logo is clicked
    setUrl("http://localhost:8001/api/photos/");
  };

  return (
    <div className="top-nav-bar">
      {/* Logo */}
      <span className="top-nav-bar__logo" onClick={handleClick}>
        PhotoLabs
      </span>
      {/* Render TopicList component */}
      <TopicList topics={topics} />
      {/* Render FavBadge component */}
      <FavBadge
        selected={selected}
        handleSelected={onClick}
        displayAlert={displayAlert}
      />
    </div>
  );
};

export default TopNavigation;
