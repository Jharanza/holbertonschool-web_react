import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {

    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    return (
        <>
        <div className={ css(styles.appBody)}>
            <p>Login to access the full dashboard</p>
            <div className={css(styleLogin.login)}>
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

const styles = StyleSheet.create({
    appBody: {
        height: '400px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '20px'
    }
})

const styleLogin = StyleSheet.create({
    login: {
        height: '50px'
    }
})


export default Login;
