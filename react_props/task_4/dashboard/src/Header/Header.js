import React from "react";
import './Header.css'

const Header = () => {
    return (
        <div className="App-header">
            <img src={require('../HolbertonLogo.jpg')} className="App-logo" alt="logo" />
            <h1>School dashboard</h1>
        </div>
    )
}

export default Header;
