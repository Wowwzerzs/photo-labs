import React, { useContext, useMemo } from "react";
import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import { FavoritesContext } from "App";

const HomeRoute = ({ topics }) => {
  const { favorites, isLike, setIsLike } = useContext(FavoritesContext);

  // Filter favorites based on whether they are liked or not
  const allFavorites = useMemo(() => {
    return favorites.filter((item) => {
      return item.liked;
    });
  });

  // Toggle like status
  const toggleLike = () => {
    setIsLike(!isLike);
  };

  // Determine if there are liked photos
  const thereIsLike = allFavorites.length > 0;

  return (
    <div className="home-route">
      {/* Render TopNavigationBar with props */}
      <TopNavigationBar
        topics={topics}
        selected={thereIsLike}
        onClick={toggleLike}
        displayAlert={thereIsLike}
      />
      {/* Render PhotoList with photos based on whether the user is viewing liked photos or all favorites */}
      <PhotoList photos={isLike ? allFavorites : favorites} />
    </div>
  );
};

export default HomeRoute;
