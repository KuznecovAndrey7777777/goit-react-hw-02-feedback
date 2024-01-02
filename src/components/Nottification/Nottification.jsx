import React, { Component } from 'react';
import styles from './Nottification.module.css';

class Nottification extends Component {
  render() {
    const { message } = this.props;
    return <p className={styles.notification}>{message}</p>;
  }
}

export default Nottification;
