import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authSlice'; 

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }
    
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(logIn({ email, password }))
            .then(() => {
                navigate('/'); // Redirect to home page on successful login
            })
            .catch(error => {
                console.error('Login failed:', error);
                // Handle login failure, e.g., display error message
            });
    }
    
    return (
        <div>
            <button onClick={() => navigate(-1)}>Go back</button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email
                    <input type="email" id="email" value={email} onChange={handleEmailChange}/>
                </label>
                <label htmlFor="password">
                    Password
                    <input type="password" id="password" value={password} onChange={handlePasswordChange}/>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;
