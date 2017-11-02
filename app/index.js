'use strict';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import MainBlock from './components/_Home/MainBlock';
import NotFound from './components/_Home/NotFound';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

function Index() {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={MainBlock} />
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  );
}

render(<Index />, document.getElementById('app'));

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}