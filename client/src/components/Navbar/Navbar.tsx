import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import cardLoading from '../../assets/cardLoading.svg';

const Navbar = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [boardTitle, setBoardTitle] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
    console.log('Logged out');
  };

  const handleCreateBoard = () => {
    setIsCreating(true);
  };

  const handleInputChange = (e) => {
    setBoardTitle(e.target.value);
  };

  const handleCreateBoardSubmit = () => {
    if (boardTitle.trim()) {
      // Navigate to the new board page with the given title
      navigate(`/board/${boardTitle.trim()}`);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={cardLoading} alt="Trello Logo" className="navbar-logo" />
        {!isCreating ? (
          <button className="btn create-board" onClick={handleCreateBoard}>
            Create Board
          </button>
        ) : (
          <div className="create-board-input">
            <input
              type="text"
              value={boardTitle}
              onChange={handleInputChange}
              placeholder="Enter board title"
              className="board-title-input"
            />
            <button className="btn create-board-submit" onClick={handleCreateBoardSubmit}>
              Create
            </button>
          </div>
        )}
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
