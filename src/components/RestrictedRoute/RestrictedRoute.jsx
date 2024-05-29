import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RestrictedRoute = () => {
  const {token} = useSelector((state) => state.auth);

  if (token) {
    return <Navigate to="/contacts" replace />; 
  }

  return <Outlet />; 
};

export default RestrictedRoute;