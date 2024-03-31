import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
    if (value ) return <li data-notification-type={ type }>{ value }</li>
    else return <li data-notification-type={ type } dangerouslySetInnerHTML={{ __html: html }} ></li>
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
