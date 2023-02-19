import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { ShoppingManager } from './components/ShoppingManager';
import { Routes, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="/shopping" element={<ShoppingManager></ShoppingManager>}></Route>

    </Routes>
    </div>
  );
}

export default App;
