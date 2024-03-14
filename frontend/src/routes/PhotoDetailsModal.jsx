import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closeModal }) => { // Receive closeModal prop
  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <h2 className="photo-details-modal__header">Photo Details</h2>
        <button className="photo-details-modal__close-button" onClick={closeModal}> 
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className="photo-details-modal__content">
        {/* Display larger version of selected photo */}
        {/* Display similar photos */}
        {/* Display photo information */}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
