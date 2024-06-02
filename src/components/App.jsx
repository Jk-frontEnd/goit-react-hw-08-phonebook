import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from '../components/Navigation/Navigation';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';

const HomePage = lazy(() => import('../components/Home/Home'));
const RegisterPage = lazy(() => import('../components/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../components/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../components/ContactPage/ContactPage'));

export const App = () => {
  return (
    <>
        <Navigation />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<RestrictedRoute>
          <LoginPage />
        </RestrictedRoute>} />
        <Route path="/register" element={<RestrictedRoute>
          <RegisterPage />
        </RestrictedRoute>} />
          <Route element={<PrivateRoute/>}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
      </>
  );
};
