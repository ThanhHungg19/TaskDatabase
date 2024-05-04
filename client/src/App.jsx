import React from "react";
import Index from "./components/pages/IndexPage/Index";
import Login from "./components/pages/LoginPage/Login";
import Register from "./components/pages/RegisterPage/Register";
import Home from "./components/pages/HomePage/HomePage";
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import Board from "./components/pages/BoardPage/BoardPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/register" exact Component={Register}/>
        <Route path="/login" exact Component={Login}/>
        <Route path="/" exact Component={Index}/>
        <Route path="/home" exact Component={Home}/>
        <Route path="/board" exact Component={Board}/>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
