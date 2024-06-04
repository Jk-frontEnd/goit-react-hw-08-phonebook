import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import css from './Navigation.module.css';

const Navigation = () => {
  const token = useSelector(state => state.auth.token);

  return (
    <nav className={css.nav}>
        <NavLink className={css.link} to="/" exact>Home</NavLink>
        {token && (
         <div  className={css.leftBox}>
            <NavLink className={css.link} to="/contacts">Contacts</NavLink>
            <UserMenu />
        </div>
        )}
    </nav>
  );
};

export default Navigation;