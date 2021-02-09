import About from './pages/About';
import Home from './pages/Home';
import Work from './pages/Work';

interface Route {
  name: string;
  path: string;
  component: any;
}

export const routes: Route[] = [
  {
    name: 'home',
    path: '/home',
    component: Home,
  },
  {
    name: 'work',
    path: '/work',
    component: Work,
  },
  {
    name: 'about',
    path: '/about',
    component: About,
  },
  {
    name: '默认路由',
    path: '/',
    component: Home,
  },
];
