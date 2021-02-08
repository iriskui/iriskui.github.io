import React from 'react';
import styles from './style.less';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const HeaderComp = () => {
  return (
    <Header className={styles.header}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        className="menu"
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Work</Menu.Item>
        <Menu.Item key="3">About</Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComp;
