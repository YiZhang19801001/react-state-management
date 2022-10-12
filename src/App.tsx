import React from 'react';
import {BrowserRouter as Router, Route,Routes, NavLink} from 'react-router-dom';
import Home from './pages/Home/Home'
import ReduxToolKit from './pages/ReduxToolKit/ReduxToolKit'
import Jotai from './pages/Jotai/Jotai'
import Redux from './pages/Redux/Redux'

import './App.css';

function App() {
  return (
    <Router>
      <header>
        <NavLink to='/' className='logo' end>RTK vs Jotai</NavLink>
        <div className='group'>
          <ul className='navigation'>
            <li><NavLink to='/' end>Home</NavLink></li>
            <li><NavLink to='redux-toolkit'>RTK</NavLink></li>
            <li><NavLink to='jotai'>Jotai</NavLink></li>
            <li><NavLink to='redux'>Redux</NavLink></li>
          </ul>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='redux-toolkit' element={<ReduxToolKit/>}/>
        <Route path='jotai' element={<Jotai/>}/>
        <Route path='redux' element={<Redux/>}/>
      </Routes>
    </Router>
  );
}

export default App;
