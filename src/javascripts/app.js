import m      from 'mithril';
import Layout from './pages/layout';
import Login  from './pages/login';

let layout = new Layout();

let routes = {
  '/': Login,
}

m.route(document.getElementById('chatApp'), '/', layout.handleRoutes(routes));
