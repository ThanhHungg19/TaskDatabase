import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const handleLogout = () => {
    // Handle the logout logic here
    console.log('Logged out');
  };

  return (
    <div className="navbar">
      <h1 className="navbar-title">Trello Kanban Board</h1>
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
