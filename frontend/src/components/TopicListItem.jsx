import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic }) => {
  const { id, slug, title } = topic;

  return (
    <div className="topic-list__item">
      <span className="topic-link">{title}</span>
    </div>
  );
};

export default TopicListItem;