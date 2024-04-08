import React from "react";
import { StyleSheet, css } from "aphrodite";
import logo from '../assets/HolbertonLogo.jpg';

function Header() {
    return (
        <div className={css(styles.appHeader)}>
            <img src={logo} className={css(styleImages.appLogo)} alt="logo" />
            <h1 className={ css(styleH1.appH1) }>School dashboard</h1>
        </div>
    )
}

const styles = StyleSheet.create({
    appHeader: {
        display: 'flex',
        alignItems: 'center',
        color: 'red',
        borderBottom: '3px solid red',
        '@media (max-width: 900px)': {
            display: 'flex',
        }
    }
});

const styleH1 = StyleSheet.create({
    appH1: {
        '@media (max-width: 900px)': {
            maxWidth: '100px',
            display: 'flex',
            flexDirection: 'column',
        }
    }
})

const styleImages = StyleSheet.create({
    appLogo: {
        maxHeight: '350px'
    }
})

export default Header;
