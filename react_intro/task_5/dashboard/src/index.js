import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { Notifications } from './Notifications/Notifications';

const root = document.getElementById('root');
ReactDOM.render(
  <>
    <div className='root-notifications'>
      < Notifications />
    </div>
    <App />
  </>
, root);
