import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardPage from './pages/BoardPage/BoardPage';
import IndexPage from './pages/IndexPage/IndexPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<IndexPage />} />
        <Route path="/board/:title" element={<BoardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
