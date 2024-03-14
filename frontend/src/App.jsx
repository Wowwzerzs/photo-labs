import React from 'react';
import "./App.scss";
import PhotoList from './components/PhotoList';
import TopicList from "./components/TopicList";
import TopNavigation from "./components/TopNavigationBar";
import HomeRoute from "routes/HomeRoute";

const App = () => (
  <div className="App">
    <HomeRoute />
  </div>
);

export default App;
