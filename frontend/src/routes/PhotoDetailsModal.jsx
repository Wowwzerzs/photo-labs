import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

// Define the FavoriteButton function component inline
const FavoriteButton = ({ photoId }) => {
  const handleFavoriteClick = () => {
    // Handle favorite button click logic here
    console.log(`Photo ${photoId} favorited`);
  };

  return (
    <button className="favorite-button" onClick={handleFavoriteClick}>
      Favorite
    </button>
  );
};

const PhotoDetailsModal = ({ closeModal, singlePhotoDetail }) => {
  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <h2 className="photo-details-modal__header">Photo Details</h2>
        <button className="photo-details-modal__close-button" onClick={closeModal}> 
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className="photo-details-modal__content">
        {singlePhotoDetail && (
          <div>
            <img
              className="photo-details-modal__image"
              src={singlePhotoDetail.urls.full}
              alt={singlePhotoDetail.alt_description}
            />
            <p>{singlePhotoDetail.user.name}</p>
            <p>{singlePhotoDetail.description}</p>
            {/* Render the FavoriteButton inline */}
            <FavoriteButton photoId={singlePhotoDetail.id} />
            <div>
              <h3>Photographer Details</h3>
              <img
                src={singlePhotoDetail.user.profile_image && singlePhotoDetail.user.profile_image.large} 
                alt={singlePhotoDetail.user.name}
              />
              <p>Location: {singlePhotoDetail.user.location}</p>
            </div>
          </div>
        )}
        {singlePhotoDetail && singlePhotoDetail.similarPhotos && singlePhotoDetail.similarPhotos.length > 0 && (
          <div>
            <h3>Similar Photos</h3>
            <PhotoList photos={singlePhotoDetail.similarPhotos} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
