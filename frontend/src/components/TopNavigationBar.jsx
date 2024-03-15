import React, { useState } from "react";
import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";

const TopNavigationBar = ({ topics, favoriteCount }) => {
  const [url, setUrl] = useState(""); // State to manage URL

  // Function to handle logo click event and set URL
  const handleClick = () => {
    setUrl("http://localhost:8001/api/photos/");
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={handleClick}>
        PhotoLabs
      </span>
      <TopicList topics={topics} />
      {favoriteCount > 0 && (
        <div className="notification">
          You have {favoriteCount} favorited photo(s).
        </div>
      )}
      <FavBadge favoriteCount={favoriteCount} />
    </div>
  );
};

export default TopNavigationBar;
