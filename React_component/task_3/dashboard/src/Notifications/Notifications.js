import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css'
import close  from '../close.png'
import NotificationItem from './NotificationItem';

class Notifications extends Component {
  constructor( props ) {
    super(props);
    this.clickBotton = this.clickBotton.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  clickBotton(){
    console.log('Close button has been clicked')
  }

  markAsRead (id) {
    console.log(`Notification ${id} has been marked as read`)
  }
    
  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
        <>
        <div className='menuItem'>Your notifications</div>
        {displayDrawer && ( // Conditional rendering based on displayDrawer
          <>
            
            <div className='Notifications'> {/* Only rendered when displayDrawer is true */}
              <button
                aria-label='Close'
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '10px',
                  padding: '5px 10px',
                  height: '20px',
                  width: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  border: 'none',
                }}
                onClick={this.clickBotton}
              >
                <img src={close} alt='close'></img>
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
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}

export default Notifications;
