import React, { useContext } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList'; 
import PhotoFavButton from '../components/PhotoFavButton'; 
import { FavoritesContext } from 'App'; // Import FavoritesContext

const PhotoDetailsModal = ({ closeModal, singlePhotoDetail }) => {
  // Access toggleFavorite and favoritePhotos from FavoritesContext
  const { toggleFavorite, favoritePhotos } = useContext(FavoritesContext);

  // Function to render favorite button
  const renderFavButton = () => {
    if (!singlePhotoDetail) return null;
    return (
      <PhotoFavButton
        photoId={singlePhotoDetail.id}
        toggleFavorite={toggleFavorite}
        isFavorite={favoritePhotos.includes(singlePhotoDetail.id)}
      />
    );
  };

  return (
    <div className="photo-details-modal">
      {/* Top bar of the modal */}
      <div className="photo-details-modal__top-bar">
        <h2 className="photo-details-modal__header">Photo Details</h2>
        {/* Close button */}
        <button className="photo-details-modal__close-button" onClick={closeModal}> 
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      {/* Content of the modal */}
      <div className="photo-details-modal__content">
        {/* Render if single photo detail is available */}
        {singlePhotoDetail && (
          <div>
            {/* Display the photo */}
            <img
              className="photo-details-modal__image"
              src={singlePhotoDetail.urls.full}
              alt={singlePhotoDetail.alt_description}
            />
            {/* Display photo owner's name and description */}
            <p>{singlePhotoDetail.user.name}</p>
            <p>{singlePhotoDetail.description}</p>
            {/* Render the favorite button */}
            {renderFavButton()}
            {/* Photographer details */}
            <div>
              <h3>Photographer Details</h3>
              {/* Display photographer's profile image */}
              <img
                src={singlePhotoDetail.user.profile_image && singlePhotoDetail.user.profile_image.large} 
                alt={singlePhotoDetail.user.name}
              />
              {/* Display location details if available */}
              {singlePhotoDetail.user.location && typeof singlePhotoDetail.user.location === 'object' && (
                <div>
                  <p>Location: {singlePhotoDetail.user.location}</p> {/* Assuming location is a string */}
                  <p>City: {singlePhotoDetail.user.location.city}</p>
                  <p>Country: {singlePhotoDetail.user.location.country}</p>
                </div>
              )}
            </div>
          </div>
        )}
        {/* Render similar photos if available */}
        {singlePhotoDetail && singlePhotoDetail.similarPhotos && singlePhotoDetail.similarPhotos.length > 0 && (
          <div className="photo-details-modal__images">
            <h3>Similar Photos</h3>
            {/* Render similar photos using the PhotoList component */}
            <PhotoList photos={singlePhotoDetail.similarPhotos} /> {/* Use PhotoList without passing favoritePhotos */}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
