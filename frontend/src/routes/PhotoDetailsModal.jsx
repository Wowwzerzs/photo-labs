import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoListItem from '../components/PhotoListItem'; 
import PhotoFavButton from '../components/PhotoFavButton'; 

const PhotoDetailsModal = ({ closeModal, singlePhotoDetail }) => {
  // Function to handle toggling favorite status of a photo
  const toggleFavorite = (photoId) => {
    // Handle favorite toggle logic here
    console.log(`Toggle favorite for photo ${photoId}`);
  };

  // Logic to check if the photo is marked as favorite
  const isFavorite = singlePhotoDetail && singlePhotoDetail.isFavorite;

  // Function to render the favorite button
  const renderFavButton = () => {
    // Render nothing if photo detail is not available
    if (!singlePhotoDetail) return null;
    
    // Render the favorite button component with appropriate props
    return (
      <PhotoFavButton
        photoId={singlePhotoDetail.id}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
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
              {singlePhotoDetail.user.location && (
                <div>
                  <p>Location: {singlePhotoDetail.user.location}</p>
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
            {/* Render similar photos using the PhotoListItem component */}
            {singlePhotoDetail.similarPhotos.map(photo => (
              <PhotoListItem
                key={photo.id}
                photo={photo}
                handleClick={() => {}}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
