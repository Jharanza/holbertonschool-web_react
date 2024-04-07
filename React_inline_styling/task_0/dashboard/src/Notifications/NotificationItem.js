import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component  {

    shouldComponentUpdate(nextProps) {
        return nextProps.id !== this.props.id ||
                nextProps.type !== this.props.type ||
                nextProps.html !== this.props.html ||
                nextProps.value !== this.props.value;
    }

    render() {
        const { id, type, html, value, markAsRead } = this.props;
        return (
            <li data-notification-type={ type }  onClick={ () => markAsRead(id) }>
                { html ? < div dangerouslySetInnerHTML={{ __html: html }} /> : value }
            </li>
        )
    }
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
