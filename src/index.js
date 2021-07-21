import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { routes } from './utils/constants';
import { FinancialNumberInput } from './pages';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path={`/${routes.FINANCIAL_NUMBER_INPUT}`}>
          <FinancialNumberInput />
        </Route>
        <Route path="/" render={() => <Redirect to={`/${routes.FINANCIAL_NUMBER_INPUT}`} />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
