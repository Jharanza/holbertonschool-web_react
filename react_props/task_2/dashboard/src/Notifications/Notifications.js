import React from 'react';
import './Notifications.css'
import close  from '../assets/close.png'
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem'

export const Notifications = () => {

    const clickBotton = () => console.log('Close button has been clicked')

    return (
        <div className='Notifications'>
            
            <button 
                aria-label='Close'
                style={{
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    padding: '5px 10px',
                    height: '20px',
                    width: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    border: 'none'
                }}
                onClick={ clickBotton }
            ><img src={ close } alt='close'></img></button>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={ getLatestNotification() } />
                
            </ul>
        </div>
    )
}

export default Notifications;
