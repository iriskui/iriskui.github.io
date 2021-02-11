import About from './pages/About';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';

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
    name: 'daydream',
    path: '/daydream',
    component: Work,
  },
  {
    name: 'objects',
    path: '/objects',
    component: Work,
  },
  {
    name: 'about',
    path: '/about',
    component: About,
  },
  {
    name: 'contact',
    path: '/contact',
    component: Contact,
  },
  {
    name: '默认路由',
    path: '/',
    component: Home,
  },
];
