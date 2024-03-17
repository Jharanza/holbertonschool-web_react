import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css'
import close  from '../close.png'
import { getLatestNotification } from '../utils';
import NotificationItem from './NotificationItem';


const Notifications = ({ displayDrawer }) => {

    const clickBotton = () => console.log('Close button has been clicked');

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
                onClick={clickBotton}
              >
                <img src={close} alt='close'></img>
              </button>
              <p>Here is the list of notifications</p>
              <ul>
                <NotificationItem type='default' value='New course available' />
                <NotificationItem type='urgent' value='New resume available' />
                <NotificationItem type='urgent' html={getLatestNotification()} />
              </ul>
            </div>
          </>
        )}
      </>
    )
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool.isRequired
}

Notifications.defaultProps = {
    displayDrawer: false
}

export default Notifications;
