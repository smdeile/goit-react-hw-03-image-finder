import React from 'react';
import Modal from './Modal';

import styles from '../styles.module.css';

const ImageGalleryItem = ({
  webformatURL,
  tags,
  onClick,
  largeImageURL,
  state,
  onSelect,
}) => (
  <li className="ImageGalleryItem">
    <img
      src={webformatURL}
      alt={tags}
      className={styles.image}
      onClick={onClick}
    />
    {/* {state.isModalOpen && (
      <Modal
        onClick={onClick}
        largeImageURL={largeImageURL}
        state={state}
        onSelect={onSelect}
      />
    )} */}
  </li>
);
export default ImageGalleryItem;
