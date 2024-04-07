import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
// import './Notifications.css'
import close  from '../assets/close.png'
import NotificationItem from './NotificationItem';


class Notifications extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prevListLength: 0
    }
    this.clickBotton = this.clickBotton.bind(this);
    this.markAsRead = this.markAsRead.bind(this)
  }

  static getDerivadedStateFromProps(nextProps, prevState) {
    if (nextProps.listNotifications.length !== prevState.prevListLength) {
      return { prevListLength: nextProps.listNotifications.length }
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.listNotifications.length > this.state.prevListLength
  }

  clickBotton(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  markAsRead (id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
        <>
        <div className={ css(style.menuItem) }>Your notifications</div>
        {displayDrawer && ( // Conditional rendering based on displayDrawer
          <>
            
            <div className={ css(styleNotifications.notifications) }> {/* Only rendered when displayDrawer is true */}
              <button
                aria-label='Close'
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '10px',
                  padding: '5px 10px',
                  // height: '20px',
                  // width: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  border: 'none',
                }}
                onClick={this.clickBotton}
              >
                <img src={close} alt='close' className={ css(styleButton.imageButton)}></img>
              </button>
              <p>Here is the list of notifications</p>
              <ul>
                { listNotifications.length === 0 && <p>No new notification for now</p>}
                { listNotifications.map(notification => 
                  <NotificationItem 
                    key={ notification.id }
                    id={ notification.id }
                    type={ notification.type }
                    value={ notification.value }
                    html={ notification.html }
                    markAsRead={ this.markAsRead }
                  />
                )}
              </ul>
            </div>
          </>
        )}
      </>
  )}
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool.isRequired
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

const style = StyleSheet.create({
  menuItem: {
    display: 'inline',
    position: 'absolute',
    right: '15px',
    top: '25px'
  }
})

const styleNotifications = StyleSheet.create({
  notifications: {
    position: 'absolute',
    right: '15px',
    top: '50px',
    border: '2px dotted red',
    padding: '10px',
    width: '35%'
  }
})

const styleButton = StyleSheet.create({
  imageButton: {
    height: '10px',
    width: '10px'
  }
})

export default Notifications;
