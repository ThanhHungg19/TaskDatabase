import React, { useState } from 'react';
import './LoginPage.css';
import trelloLogo from '../../assets/trello-logo .svg';
import leftImage from '../../assets/trello-left.svg';
import rightImage from '../../assets/trello-right.svg';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Handle the login logic here
  };

  return (
    <div className="login-page">
      <img src={leftImage} alt="Left illustration" className="login-image left" />
      <div className="login-container">
        <img src={trelloLogo} alt="Trello Logo" className="logo" />
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Log in to Trello</h2>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn login-button">Log in</button>
          <a href="#" className="signup-link">Sign up for an account</a>
        </form>
      </div>
      <img src={rightImage} alt="Right illustration" className="login-image right" />
    </div>
  );
};

export default LoginPage;
