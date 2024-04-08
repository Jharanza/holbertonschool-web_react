import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {

    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    return (
        <>
        <div className={ css(styles.appBody, mediaQueries.appBody)}>
            <p style={{ fontSize: '20px'}}>Login to access the full dashboard</p>
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
                />
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
        paddingTop: '20px',
        '@media (max-width: 900px)': {
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            fontSize: '20px'
        }
    }
});

const styleLogin = StyleSheet.create({
    login: {
        height: '50px',
        '@media (max-width: 900px)': {
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100px',
            height: '350px',
        }
    }
});

const mediaQueries = StyleSheet.create({})

export default Login;
