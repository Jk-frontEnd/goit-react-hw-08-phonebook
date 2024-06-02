import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RestrictedRoute = ({component: Component, redirectTo='/contacts'}) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;