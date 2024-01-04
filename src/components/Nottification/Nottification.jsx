import React from 'react';
import styles from './Nottification.module.css';

const Nottification = ({ message }) => (
  <p className={styles.nottification}>{message}</p>
);

export default Nottification;
