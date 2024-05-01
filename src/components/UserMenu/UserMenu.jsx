import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, getCurrentUser } from '../../redux/authSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const handleLogout = async () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      {user && user.email && (
        <>
          <p>{user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default UserMenu;
