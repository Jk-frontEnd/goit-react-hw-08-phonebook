import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/authSlice';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout =async () => {
    dispatch(logoutUser());
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;