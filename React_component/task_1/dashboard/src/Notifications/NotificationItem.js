import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value, onMarkAsRead, id }) => {
    const handleClick = () => {
        onMarkAsRead(id); 
    };

    return (
        <li onClick={ handleClick } >
            if (value) return <li data-notification-type={ type }>{ value }</li>;
            else return <li data-notification-type={ type } dangerouslySetInnerHTML={{ __html: html }}></li>
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
    ]),
    onMarkAsRead: PropTypes.func,
    id: PropTypes.number.isRequired
}

NotificationItem.defaultProps = {
    html: false,
    onMarkAsRead: () => {}
}

export default NotificationItem;
