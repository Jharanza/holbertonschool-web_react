import React from 'react';

const NotificationItem = ({ type, html, value}) => {
    if (value) return <li data-notification-type={ type }>{ value }</li>;
    else return <li data-notification-type={ type } dangerouslySetInnerHTML={{ __html: html }}></li>
}

export default NotificationItem;
