import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contacts');
  };

  return (
    <div>
      <h1>Welcome to the Phonebook App!</h1>
      <p>Please log in or register to start using the app.</p>
      <button onClick={handleClick}>Go to Contacts</button>
    </div>
  );
};

export default HomePage;