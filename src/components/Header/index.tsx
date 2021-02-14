import React from 'react';
import styles from './style.less';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router-dom';

const { Header } = Layout;
const { SubMenu } = Menu;

const HeaderComp = () => {
  const history = useHistory();

  const handleClick = (e: any) => {
    history.push(e.key);
  };

  const backToHome = () => history.push('/home');

  return (
    <Header className={styles.header}>
      <div className="title-wrapper" onClick={backToHome}>
        <h1 className="title">SuKui</h1>
        <p className="description">Photography</p>
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        className="menu"
        onClick={handleClick}
      >
        <Menu.Item key="home">Home</Menu.Item>
        <SubMenu key="SubMenu" title="Work">
          <Menu.Item key="objects">The System of Objects</Menu.Item>
          <Menu.Item key="daydream">Daydream</Menu.Item>
        </SubMenu>
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="contact">Contact</Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComp;
