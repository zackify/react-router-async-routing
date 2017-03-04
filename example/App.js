import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import { Route, Link } from './router';

export default () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Index</Link></li>
        <li><Link to="/about/zach">About</Link></li>
        <li><Link to="/home">Home</Link></li>
      </ul>

      <hr />

      {routes.map(route => <Route key={route.path} {...route} />)}
    </div>
  </Router>
);
