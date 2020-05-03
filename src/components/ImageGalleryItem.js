import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles.module.css';

const ImageGalleryItem = ({ webformatURL, alt, onSelect }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      src={webformatURL}
      alt={alt}
      className={styles.image}
      onClick={onSelect}
    />
  </li>
);
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  alt: PropTypes.string,
  onSelect: PropTypes.func,
};
export default ImageGalleryItem;
