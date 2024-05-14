import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from '../components/Navigation/Navigation';
import HomePage from '../components/Home/Home';
import RegisterPage from '../components/RegisterPage/RegisterPage';
import LoginPage from '../components/LoginPage/LoginPage';
import ContactsPage from '../components/ContactPage/ContactPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};