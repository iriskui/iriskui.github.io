import React from 'react';
import styles from './style.less';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router-dom';

const { Header } = Layout;

const HeaderComp = () => {
  const history = useHistory();

  const handleClick = (e: any) => {
    history.push(e.key);
  };

  return (
    <Header className={styles.header}>
      <div style={{ fontSize: 40,backgroundColor:'#000',color:'#fff' }}>SuKui</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        className="menu"
        onClick={handleClick}
      >
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="work">Work</Menu.Item>
        <Menu.Item key="about">About</Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComp;
