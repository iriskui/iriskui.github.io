import styles from './style.less';
import { name, paragraph1, paragraph2, paragraph3, paragraph4 } from './const';
import React from 'react';

const AboutPage = () => {
  return (
    <div className={styles.about}>
      <h1 className="name">{name}</h1>
      <p className="description">{paragraph1}</p>
      <p className="description">{paragraph2}</p>
      <p className="description">{paragraph3}</p>
      <p className="description">{paragraph4}</p>
    </div>
  );
};

export default AboutPage;
