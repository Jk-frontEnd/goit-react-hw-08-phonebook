import React, { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/authSlice';
import { useAuth } from '../redux/useAuth';

// Імпортуємо компоненти з використанням lazy
const Home = lazy(() => import('./Home/Home'));
const ContactPage = lazy(() => import('./ContactPage/ContactPage'));
const Register = lazy(() => import('./Register/Register'));
const Login = lazy(() => import('./Login/Login'));
const Layout = lazy(() => import('./Layout'));
const RestrictedRoute = lazy(() => import('./RestrictedRoute'));
const PrivateRoute = lazy(() => import('./PrivateRoute'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing === undefined) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={Register} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={Login} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={ContactPage} />}
        />
      </Route>
    </Routes>
  );
};

export { App };
