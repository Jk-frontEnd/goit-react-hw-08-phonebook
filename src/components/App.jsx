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
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<PrivateRoute/>}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
      </>
  );
};


// ! TODO:
// * Раут з контактами має бути захищеним - тільки авторизований користувач повинен мати до нього доступ.
// TODO: При перезавантаженні сторінки авторизований користувач має залишатись авторизованим.
// TODO: Видалення контактів не працює.
// TODO: Фетчінг контактів не працює.