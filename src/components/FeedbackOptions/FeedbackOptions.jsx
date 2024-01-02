import React, { Component } from 'react';
// import React from 'react';
import styles from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={styles.options}>
        {options.map(option => (
          <button
            key={option}
            className={styles.button}
            onClick={() => onLeaveFeedback(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    );
  }
}

// const FeedbackOptions = ({ options, onLeaveFeedback }) => (
//   <div className={styles.options}>
//     {options.map(option => (
//       <button
//         key={option}
//         className={styles.button}
//         onClick={() => onLeaveFeedback(option)}
//       >
//         {option.charAt(0).toUpperCase() + option.slice(1)}
//       </button>
//     ))}
//   </div>
// );

export default FeedbackOptions;
