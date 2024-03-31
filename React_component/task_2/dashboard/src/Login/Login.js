import React, { useState } from 'react';

function Login() {

    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    return (
        <>
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
        </>
    )
}

export default Login;
