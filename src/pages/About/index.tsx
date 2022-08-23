import styles from './style.less';
import { description, name, awards } from './const';
import React from 'react';

const AboutPage = () => {
  return (
    <div className={styles.about}>
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
      <p className="description">{awards}</p>
    </div>
  );
};

export default AboutPage;
