import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Link to='/app1'>app1</Link>
      <Link to='/app2'>app2</Link>
      <Link to='/app3'>app3</Link>
      <Link to='/app4'>app4</Link>
      <div id='app1'></div>
      <div id='app2'></div>
      <div id='app3'></div>
      <div id='app4'></div>
    </div>
  );
}

export default App;
