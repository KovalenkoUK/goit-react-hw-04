import React from 'react';
import Modal from 'react-modal';
import './ImageModal.module.css';

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="ImageModal">
      <img src={image.urls.regular} alt={image.alt_description} />
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;