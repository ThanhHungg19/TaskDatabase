import React from 'react';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import BoardPage from './pages/BoardPage/BoardPage';
import IndexPage from './pages/IndexPage/IndexPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    {/* <Route path="/register" exact Component={Register}/>
      <Route path="/login" exact Component={Login}/> */}
      <Route path="/" exact Component={IndexPage}/>
      <Route path="/board" exact Component={BoardPage}/>  
    </Routes>
  </BrowserRouter>
  );
}

export default App;
