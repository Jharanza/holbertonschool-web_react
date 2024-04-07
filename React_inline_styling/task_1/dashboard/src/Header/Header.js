import React from "react";
import { StyleSheet, css } from "aphrodite";
import logo from '../assets/HolbertonLogo.jpg';

function Header() {
    return (
        <div className={css(styles.appHeader)}>
            <img src={logo} className={css(styleImages.appLogo)} alt="logo" />
            <h1>School dashboard</h1>
        </div>
    )
}

const styles = StyleSheet.create({
    appHeader: {
        display: 'flex',
        alignItems: 'center',
        color: 'red',
        borderBottom: '3px solid red'
    }
});

const styleImages = StyleSheet.create({
    appLogo: {
        maxHeight: '350px'
    }
})


export default Header;
