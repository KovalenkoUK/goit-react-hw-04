import ReactModal from 'react-modal';
import styles from './ImageModal.module.css';

export default function ImageModal({ isOpen, onClose, image }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
    </ReactModal>
  );
}
