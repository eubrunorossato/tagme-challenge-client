import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './pages/main/index';
import LoginPage from './pages/login/index';
import RecipeDetailsPage from './pages/recipeDetails/index';
import { AuthAppRoutes, AuthLoginRoute } from './components/auth/index';

export default function Routes() {
  return (
    <Router>
      <AuthLoginRoute exact path="/login" component={LoginPage} />
      <AuthAppRoutes exact path="/" component={MainPage} />
      <AuthAppRoutes
        exact
        path="/recipe-datails"
        component={RecipeDetailsPage}
      />
    </Router>
  );
}
