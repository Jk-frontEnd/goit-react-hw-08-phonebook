import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from '../components/Navigation/Navigation';
import HomePage from '../components/Home/Home';
import RegisterPage from '../components/RegisterPage/RegisterPage';
import LoginPage from '../components/LoginPage/LoginPage';
import ContactsPage from '../components/ContactPage/ContactPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PrivateRoute/>}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<PrivateRoute/>}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
};