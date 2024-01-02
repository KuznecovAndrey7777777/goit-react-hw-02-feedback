import React, { Component } from 'react';
// import React from 'react';
import styles from './Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={styles.section}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

// const Section = ({ title, children }) => (
//   <div className={styles.section}>
//     <h2>{title}</h2>
//     {children}
//   </div>
// );

export default Section;
