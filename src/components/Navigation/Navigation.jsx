import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <nav className={css.nav}>
          <NavLink className={css.link} to="/" exact>Home</NavLink>
        {!isLoggedIn && (
          <div className={css.leftBox}>
            <NavLink className={css.link} to="/register">Register</NavLink>
            <NavLink className={css.link} to="/login">Login</NavLink>
          </div>
        )}
        {isLoggedIn && (
         <div  className={css.leftBox}>
            <NavLink className={css.link} to="/contacts">Contacts</NavLink>
            <UserMenu />
        </div>
        )}
    </nav>
  );
};

export default Navigation;