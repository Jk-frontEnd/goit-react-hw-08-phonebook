import React, { useState } from 'react';

const Register = () => {
  const [formData] = useState({
    username: '',
    email: '',
    password: ''
  });

  return (
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          placeholder="Enter your username"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
