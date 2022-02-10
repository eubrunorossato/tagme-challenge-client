import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './pages/main/index';
import LoginPage from './pages/login/index';
import RecipeDetailsPage from './pages/recipeDetails/index';
import AuthComponent from './components/auth/index';

export default function Routes() {
  return (
    <Router>
      <AuthComponent exact path="/login" component={LoginPage} />
      <AuthComponent exact path="/" component={MainPage} />
      <AuthComponent
        exact
        path="/recipe-datails"
        component={RecipeDetailsPage}
      />
    </Router>
  );
}
