import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import css from './AuthNav.module.css'

export const AuthNav = () => {
    const token = useSelector(state => state.auth.token);

    return (
        <>
        {!token && (
        <div className={css.leftBox}>
          <NavLink className={css.link} to="/register">Register</NavLink>
          <NavLink className={css.link} to="/login">Login</NavLink>
        </div>
      )}
      </>
    )
}