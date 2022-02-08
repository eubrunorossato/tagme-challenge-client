import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/login/index';
import MainPage from './pages/main/index';
import RecipePage from './pages/recipe/index';
import AuthComponent from './components/auth/index';

export default function Routes() {
  return (
    <Router>
      <Route exact path="/login" component={LoginPage} />
      <AuthComponent exact path="/" component={MainPage} />
      <AuthComponent exact path="/recipe" component={RecipePage} />
    </Router>
  );
}
