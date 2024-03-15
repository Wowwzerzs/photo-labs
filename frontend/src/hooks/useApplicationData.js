import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  favorites: [],
  activePhoto: null,
  showModal: false,
  isLike: false,
  photoData: [],
  topicData: [],
  url: "http://localhost:8001/api/photos/",
  topicListPhotos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_URL":
      return { ...state, url: action.payload };
    case "SET_TOPICLIST_PHOTOS":
      return { ...state, topicListPhotos: action.payload };
    case "SET_TOPIC_DATA":
      return { ...state, topicData: action.payload };
    case "SET_PHOTO_DATA":
      return { ...state, photoData: action.payload };
    case "SET_FAVORITES":
      return { ...state, favorites: action.payload };
    case "SET_ACTIVE_PHOTO":
      return { ...state, activePhoto: action.payload };
    case "SET_SHOW_MODAL":
      return { ...state, showModal: action.payload };
    case "SET_IS_LIKE":
      return { ...state, isLike: action.payload };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allData = await axios.get("http://localhost:8001/api/photos/");
        const topicData = await axios.get("http://localhost:8001/api/topics/");

        dispatch({ type: "SET_TOPIC_DATA", payload: topicData.data });
        dispatch({ type: "SET_PHOTO_DATA", payload: allData.data });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topicListPhotos = await axios.get(`${state.url}`);

        dispatch({
          type: "SET_TOPICLIST_PHOTOS",
          payload: topicListPhotos.data,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [state.url]);

  return {
    favorites: state.favorites && state.photoData,
    setFavorites: (favorites) =>
      dispatch({ type: "SET_FAVORITES", payload: favorites }),
    activePhoto: state.activePhoto,
    setActivePhoto: (activePhoto) =>
      dispatch({ type: "SET_ACTIVE_PHOTO", payload: activePhoto }),
    showModal: state.showModal,
    setShowModal: (showModal) =>
      dispatch({ type: "SET_SHOW_MODAL", payload: showModal }),
    isLike: state.isLike,
    setIsLike: (isLike) => dispatch({ type: "SET_IS_LIKE", payload: isLike }),
    photoData: state.photoData,
    topics: state.topicData,
    setUrl: (url) => dispatch({ type: "SET_URL", payload: url }),
    topicListPhotos: state.topicListPhotos,
  };
};

export default useApplicationData;