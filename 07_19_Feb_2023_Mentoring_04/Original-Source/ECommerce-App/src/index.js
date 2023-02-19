import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from './components/Login';


ReactDOM.render(
  <Router>
           <Routes>
                 <Route exact path='/' element={< Login/>}></Route>
                 <Route exact path='/home' element={< App />}></Route>
          </Routes>
         
    </Router>
 ,
  document.getElementById('root')
);