import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/login/index';
import MainPage from './pages/main/index';
import RecipePage from './pages/recipe/index';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/recipe" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  );
}
