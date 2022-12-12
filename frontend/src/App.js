import React from 'react';
import './App.css';
import Header from './components/header/header';
import Auth from './components/auth/auth';
import Home from './components/home/home';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';



function App() {

  return (
    <Router basename='/'>
    
        <Header></Header>

        <Routes>
          <Route exact path='/' element={<Auth />} />
          <Route exact path='/home' element={<Home />} />
        </Routes>
       
    </Router>
  );
}

export default App;
