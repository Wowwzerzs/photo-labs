import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

// Sample data for topic list
const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

// TopicList component
const TopicList = ({ topics }) => {
  // Use topics passed from props or use sample data if not provided
  const currentTopic = topics || sampleDataForTopicList;

  return (
    <div className="top-nav-bar__topic-list">
      {/* Map through topics and render TopicListItem for each */}
      {currentTopic.map((data) => (
        <TopicListItem key={data.id} sampleDataForTopicListItem={data} />
      ))}
    </div>
  );
};

export default TopicList;
