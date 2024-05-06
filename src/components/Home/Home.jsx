import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleClickLogged = () => {
    navigate('/contacts');
  };

  const handleClickLogIn = () => {
    navigate('/login');
  };
  
  const handleClickReg = () => {
    navigate('/register');
  };

  return (
    <div>
      <h1>Welcome to the Phonebook App!</h1>
      <p>Please log in or register to start using the app.</p>
      {!isLoggedIn ? (
        <div>
          <button onClick={handleClickReg}>Register</button> 
          <button onClick={handleClickLogIn}>Login</button>
        </div>
      ) : (
        <button onClick={handleClickLogged}>Go to Contacts</button>
      )}
    </div>
  );
};

export default HomePage;
