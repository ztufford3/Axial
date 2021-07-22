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
import FinancialNumberDisplay from './pages/FinancialNumberDisplay/FinancialNumberDisplay';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path={`/${routes.FINANCIAL_NUMBER_INPUT}`}>
          <FinancialNumberDisplay financialNumber="1.5M" />
        </Route>
        <Route path="/" render={() => <Redirect to={`/${routes.FINANCIAL_NUMBER_INPUT}`} />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
