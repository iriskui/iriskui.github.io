import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { Layout } from 'antd';
import { routes } from './routers';

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Header />
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Switch>
              {routes.map(route => (
                <Route path={route.path} component={route.component} />
              ))}
            </Switch>
          </Content>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
