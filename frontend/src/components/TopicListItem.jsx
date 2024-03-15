import React, { useContext } from "react";
import "../styles/TopicListItem.scss";
import { FavoritesContext } from "App";

// TopicListItem component
const TopicListItem = ({ sampleDataForTopicListItem }) => {
  // Access setUrl function from FavoritesContext
  const { setUrl } = useContext(FavoritesContext);

  // Function to handle click event
  const handleClick = () => {
    // Set URL when the topic item is clicked
    setUrl(
      `http://localhost:8001/api/topics/photos/${sampleDataForTopicListItem.id}`
    );
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      {/* Display the title of the topic */}
      {sampleDataForTopicListItem.title}
    </div>
  );
};

export default TopicListItem;
