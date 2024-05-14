import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Route {...rest} render={(props) => (
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Navigate to="/login" />
      )
    )} />
  );
};

export default PrivateRoute;