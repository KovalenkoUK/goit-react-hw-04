import React from 'react';
import './ImageCard.module.css';

const ImageCard = ({ image }) => {
  return (
    <div className="ImageCard">
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;