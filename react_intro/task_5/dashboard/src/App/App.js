import React, { useState } from 'react';
import logo from '../assets/HolbertonLogo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './App.css';

function App() {

  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className='login'>
          <label htmlFor='email'>Email</label>
          <input 
            type="email"
            id="email"
            value={ email }
            onChange={ handleEmailChange }
            autoComplete='true'
          ></input>
          <label htmlFor='password'>Password</label>
          <input 
            type="password"
            id='password'
            value={ password }
            onChange={ handlePasswordChange }
            autoComplete='true'
          ></input>
          <button>OK</button>
        </div>
      </div>
      <div className="App-footer">
        <p>Copyright { getFullYear() } - { getFooterCopy() }</p>
      </div>
    </div>
  );
}

export default App;
