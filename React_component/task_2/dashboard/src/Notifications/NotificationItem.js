import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ id, type, html, value, markAsRead }) => {
    return (
        <li data-notification-type={ type }  onClick={ () => markAsRead(id) }>
            { html ? < div dangerouslySetInnerHTML={{ __html: html }} /> : value }
        </li>
    )
}

NotificationItem.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string.isRequired,
    html: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            __html: PropTypes.string
        })
    ])
}

NotificationItem.defaultProps = {
    type: 'default'
}

export default NotificationItem;
