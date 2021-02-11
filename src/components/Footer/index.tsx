import React from 'react';
import styles from './style.less';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComp = () => {
  return (
    <Footer style={{ textAlign: 'center' }} className={styles.footer}>SuKui©2021</Footer>
  );
};

export default FooterComp;
