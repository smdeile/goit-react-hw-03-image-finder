import React from 'react';
import styles from '../styles.module.css';

const ButtonMore = ({ tittle, onClick }) => (
  <button onClick={onClick} className={styles.LoadMoreButton}>
    {tittle}
  </button>
);
export default ButtonMore;
