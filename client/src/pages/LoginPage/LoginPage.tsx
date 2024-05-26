import React, { useState } from 'react';
import './LoginPage.css';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate
import trelloLogo from '../../assets/trello-logo .svg';
import leftImage from '../../assets/trello-left.svg';
import rightImage from '../../assets/trello-right.svg';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        Email: email,
        Password: password,
      });
      console.log('Login successful:', response.data);
      setSnackbarMessage('Login successful!');
      setSnackbarSeverity('success');
      setOpen(true);
      // Save the token to local storage
      localStorage.setItem('authToken', response.data.token);
      // Redirect to the board page after a short delay
      setTimeout(() => {
        navigate('/board/:title');
      }, 2000); // Adjust the delay as needed
    } catch (error) {
      console.error('Error logging in:', error);
      setSnackbarMessage('Invalid email or password');
      setSnackbarSeverity('error');
      setOpen(true);
    }
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
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
          <Link to="/signup" className="signup-link">Sign up for an account</Link>
        </form>
      </div>
      <img src={rightImage} alt="Right illustration" className="login-image right" />
      
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LoginPage;
