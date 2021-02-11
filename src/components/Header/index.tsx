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

  return (
    <Header className={styles.header}>
      <div style={{ fontSize: 40 }}>SuKui</div>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        className="menu"
        onClick={handleClick}
      >
        <Menu.Item key="home">Home</Menu.Item>
        <SubMenu key="SubMenu" title="Work">
          <Menu.Item key="daydream">DayDream</Menu.Item>
          <Menu.Item key="objects">System of Objects</Menu.Item>
        </SubMenu>
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="contact">Contact</Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComp;
