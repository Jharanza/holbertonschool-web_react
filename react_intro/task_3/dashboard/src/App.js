import React, { useState } from 'react'
import logo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const currentYear = getFullYear();
  const footerCopy = getFooterCopy();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <div className='login'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={ email }
            onChange={ handleEmailChange}
          ></input>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={ password }
            onChange={ handlePasswordChange}
          ></input>
          <button>OK</button>
        </div>
      </body>
      <footer className="App-footer">
        <p>Copyright { currentYear} - { footerCopy }</p>
      </footer>
    </div>
  );
}

export default App;
