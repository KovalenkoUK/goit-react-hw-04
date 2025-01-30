import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;