import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

function BodySection({ title, children }) {
    return (
        <div className={ css(styles.bodySection )} >
            <h2>{ title }</h2>
            { children }
        </div>    
    )
}

BodySection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

const styles = StyleSheet.create({
    bodySection: {
        fontSize: '20px',
        '@media (max-width: 900px)': {
            fontSize: '30px'
        }
    }
});

export default BodySection;
