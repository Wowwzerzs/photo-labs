import React, { useContext } from "react";
import "../styles/TopicListItem.scss";
import { FavoritesContext } from "App";

const TopicListItem = ({ sampleDataForTopicListItem }) => {
  const { setUrl } = useContext(FavoritesContext);

  // Function to handle click event
  const handleClick = () => {
    setUrl(
      `http://localhost:8001/api/topics/photos/${sampleDataForTopicListItem.id}`
    );
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      {sampleDataForTopicListItem.title}
    </div>
  );
};

export default TopicListItem;
