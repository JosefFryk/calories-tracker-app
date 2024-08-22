import React, { BrowserRouter, Routes, Route } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

const App = () => {
 return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/login" elemet={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
