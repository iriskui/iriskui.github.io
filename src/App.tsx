import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Layout } from 'antd';
import { routes } from './routers';

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout style={{ height: '100%' }}>
          <Header />
          <Content
            style={{
              padding: '40px 18vw 20px',
              marginTop: 64,
              backgroundColor: '#fff',
              minHeight: 620,
            }}
          >
            <Switch>
              {routes.map(route => (
                <Route path={route.path} component={route.component} />
              ))}
            </Switch>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
