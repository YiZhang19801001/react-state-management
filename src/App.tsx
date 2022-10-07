import React from 'react';
import {BrowserRouter as Router, Route,Routes, NavLink} from 'react-router-dom';
import Home from './pages/Home/Home'
import ReduxToolKit from './pages/ReduxToolKit/ReduxToolKit'
import Jotai from './pages/Jotai/Jotai';

import './App.css';

function App() {
  return (
    <Router>
      <header>
        <NavLink to='/' className='logo' end>Logo </NavLink>
        <div className='group'>
          <ul className='navigation'>
            <li><NavLink to='/' end>Home</NavLink></li>
            <li><NavLink to='redux-toolkit'>Redux Toolkit</NavLink></li>
            <li><NavLink to='jotai'>Jotai</NavLink></li>
          </ul>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='redux-toolkit' element={<ReduxToolKit/>}/>
        <Route path='jotai' element={<Jotai/>}/>
      </Routes>
    </Router>
  );
}

export default App;
