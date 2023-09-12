import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Link to='/'>app1</Link>
      <Link to='/user'>app1-user</Link>
      <Link to='/admin'>app1-admin</Link>
      <Routes>
        <Route path='/user' element={<h1>app1-user</h1>} />
        <Route path='/admin' element={<h1>app1-admin</h1>} />
      </Routes>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          qiankun app1
        </a>
      </header>
    </div>
  );
}

export default App;
