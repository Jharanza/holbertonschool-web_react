import React from "react";
import { getLatestNotification } from './utils';
import './Notifications.css';
import close from './close.png'

const Notifications = () => {

    const handleButtonClick = () => console.log('Close button has been clicked');

    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button
              style={{
                position: 'absolute',
                right: '10px',
                top: '10px',
                padding: '5px 10px',
                border: 'none',
                borderRadius: '5px',
              }}
              aria-label='Close'
              onClick={ handleButtonClick}
            ><img alt='close' src={ close }></img></button>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    )
}

export default Notifications;
