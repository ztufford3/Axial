import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import ApplicationContainer from './ApplicationContainer';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" render={() => <ApplicationContainer />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
