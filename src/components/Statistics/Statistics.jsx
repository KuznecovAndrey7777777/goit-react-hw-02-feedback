import React, { Component } from 'react';
// import React from 'react';
import styles from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={styles.statistics}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  }
}

// const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
//   <div className={styles.statistics}>
//     <p>Good: {good}</p>
//     <p>Neutral: {neutral}</p>
//     <p>Bad: {bad}</p>
//     <p>Total: {total}</p>
//     <p>Positive feedback: {positivePercentage}%</p>
//   </div>
// );

export default Statistics;
