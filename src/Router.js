import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/navbar/index';
import LoginPage from './pages/login/index';
import MainPage from './pages/main/index';
import RecipeDetailsPage from './pages/recipeDetails/index';
import AuthComponent from './components/auth/index';

export default function Routes() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Route exact path="/login" component={LoginPage} />
      <AuthComponent exact path="/" component={MainPage} />
      <AuthComponent
        exact
        path="/recipe-datails"
        component={RecipeDetailsPage}
      />
    </Router>
  );
}
