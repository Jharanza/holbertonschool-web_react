import React from "react";
import { StyleSheet, css } from "aphrodite";
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
    return (
        <div className={ css(styles.appFooter)  }>
            <p>Copyright { getFullYear() } - { getFooterCopy() }</p>
        </div>
    )
}

const styles = StyleSheet.create({
    appFooter: {
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '3px solid red'
    }
});

export default Footer;
