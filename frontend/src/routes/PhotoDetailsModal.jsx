import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList'; 

const PhotoDetailsModal = ({ closeModal, singlePhotoDetail }) => {
  return (
    <div className="photo-details-modal">
      {/* Top bar containing modal header and close button */}
      <div className="photo-details-modal__top-bar">
        <h2 className="photo-details-modal__header">Photo Details</h2>
        <button className="photo-details-modal__close-button" onClick={closeModal}> 
          {/* Close button with close symbol */}
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      {/* Content area displaying the selected photo details */}
      <div className="photo-details-modal__content">
        {/* Render only if singlePhotoDetail is available */}
        {singlePhotoDetail && (
          <div>
            {/* Display larger version of selected photo */}
            <img
              className="photo-details-modal__image"
              src={singlePhotoDetail.urls.full} // Ensure the correct property is used to access the larger photo URL
              alt={singlePhotoDetail.user.username}
            />
            {/* Display user name and description */}
            <p>{singlePhotoDetail.user.name}</p>
            <p>{singlePhotoDetail.description}</p>
            {/* Display similar photos if available */}
            {singlePhotoDetail.similarPhotos && singlePhotoDetail.similarPhotos.length > 0 && (
              <div>
                <h3>Similar Photos</h3>
                {/* Render similar photos using the PhotoList component */}
                <PhotoList photos={singlePhotoDetail.similarPhotos} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
