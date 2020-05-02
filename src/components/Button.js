import React from 'react';
import styles from '../styles.module.css';

const Button = ({ tittle, onClick }) => (
  <button onClick={onClick} className={styles.LoadMoreButton}>
    {tittle}
  </button>
);
export default Button;
