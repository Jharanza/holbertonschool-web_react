import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import close  from '../assets/close.png'
import NotificationItem from './NotificationItem';


const opacityFrames = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 }
};

const bounceFrames = {
  '0%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': {transform: 'translateY(5px)' }
}

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
                <img src={close} alt='close' className={ css(styleButton.imageButton, mediaQueries.menuItem)}></img>
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
        <div className={ displayDrawer ? null : css(style.menuItem) }>
          Your notifications
        </div>
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
    top: '25px',
    animationName: {
      '0%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-5px)' },
      '100%': { transform: 'translateY(5px)' }
    },
    animationDelay: '0.5s',
    animationIterationCount: 'infinite'
  }
})

const styleNotifications = StyleSheet.create({
  notifications: {
    position: 'absolute',
    right: '15px',
    top: '50px',
    border: '2px dotted red',
    padding: '10px',
    width: '35%',
  }
});



const styleButton = StyleSheet.create({
  imageButton: {
    height: '10px',
    width: '10px',
  }
})

const mediaQueries = StyleSheet.create({
  '@media (max-width: 900px)': {
    position: 'relative',
    background: 'black'
  }
})

export default Notifications;
