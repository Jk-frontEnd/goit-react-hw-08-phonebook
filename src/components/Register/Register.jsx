import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/authSlice';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }
    
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(register({ name, email, password }));
    }
    
    return (
        <div>
            <button onClick={() => navigate(-1)}>Go back</button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name
                    <input type="text" id="name" value={name} onChange={handleNameChange}/>
                </label>
                <label htmlFor="email">
                    Email
                    <input type="email" id="email" value={email} onChange={handleEmailChange}/>
                </label>
                <label htmlFor="password">
                    Password
                    <input type="password" id="password" value={password} onChange={handlePasswordChange}/>
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;
