import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from '../../redux/authSlice';
import { useEffect } from 'react';

const PrivateRoute = ({compoment: Component, redirectTo = '/'}) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const {isLoading} = useSelector((state) => state.contacts)
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCurrentUser());
    }
  }, [isLoggedIn, dispatch]);

  const redirect = !isLoggedIn && !isLoading;

  return redirect ? <Navigate to={redirectTo} /> :Component;
};

export default PrivateRoute;