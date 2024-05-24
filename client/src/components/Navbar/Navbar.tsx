import React from 'react';
import './Navbar.css';
import cardLoading from '../../assets/cardLoading.svg';
const Navbar = () => {
  const handleLogout = () => {
    // Handle the logout logic here
    console.log('Logged out');
  };

  const handleCreateBoard = () => {
    // Handle the create board logic here
    console.log('Create board');
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={cardLoading} alt="Trello Logo" className="navbar-logo" />
        <button className="btn create-board" onClick={handleCreateBoard}>
          Create Board
        </button>
      </div>
      <div className="navbar-profile">
        <span className="navbar-username">Username</span>
        <button className="navbar-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
