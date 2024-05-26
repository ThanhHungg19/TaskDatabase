import React from 'react';
import { Link } from 'react-router-dom';
import './IndexPage.css';
import trelloLogo from '../../assets/trello-logo .svg';


const IndexPage = () => {
  return (
    <div className="index-page">
      <header className="header">
        <img src={trelloLogo} alt="Trello Logo" className="logo" />
        <div className="header-buttons">
          <Link to="/login">
            <button className="btn login">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn signup">Sign up</button>
          </Link>
        </div>
      </header>
      <main className="main-content">
        <div className="text-content">
          <h1>Trello helps teams move work forward.</h1>
          <p>Collaborate, never teamworks. How to pass PDM A+? Use Trollo</p>
          <button className="btn signup-main">Sign up - it’s free</button>
        </div>
        <div className="image-content">
          <img src={"https://images.ctfassets.net/rz1oowkt5gyp/5QIzYxue6b7raOnVFtMyQs/113acb8633ee8f0c9cb305d3a228823c/hero.png?w=1200&fm=webp"} alt="Illustration" />
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
