import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Page
import Master from './Pages/Master/Master';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

export default (store) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Master}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
      </Route>
    </Router>
  );
}