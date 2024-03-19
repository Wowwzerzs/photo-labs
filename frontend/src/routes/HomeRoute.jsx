import React, { useContext, useMemo } from "react";
import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import { FavoritesContext } from "App";

const HomeRoute = ({ topics }) => {
  const { favorites, isLike, setIsLike, photoData, setFavorites } =
    useContext(FavoritesContext);

  // Memoize filtered favorites to improve performance
  const allFavorites = useMemo(() => {
    return favorites.filter((item) => {
      return item.liked;
    });
  });

// Function to toggle isLike state
  const isLikeController = () => {
    setIsLike(!isLike);
  };

  // Check if there are any liked photos
  const thereIsLike = allFavorites.length > 0;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        selected={thereIsLike}
        onClick={isLikeController}
        displayAlert={thereIsLike}
      />
      <PhotoList photos={isLike ? allFavorites : favorites} />
    </div>
  );
};

export default HomeRoute;