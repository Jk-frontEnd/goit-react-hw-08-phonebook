// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({children}) => {
  return (
    <div>
      <ul>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default Navigation;
