import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from '../../redux/authSlice';
import { useEffect } from 'react';

const PrivateRoute = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser());
    }
  }, [token, dispatch]);

  return token && isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;