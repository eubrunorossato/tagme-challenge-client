import * as React from 'react';
import { Router, Route } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/login/index';

export default function Routes() {
  return (
    (
      <Router>
        <Route exact path="/login" component={LoginPage} />
      </Router>
    ),
    document.getElementById('root')
  );
}
