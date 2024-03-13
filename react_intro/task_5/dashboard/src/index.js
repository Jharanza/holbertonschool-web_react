import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Notifications } from './Notifications';

const root = document.getElementById('root');
ReactDOM.render(
  <>
    <div className='root-notifications'>
      < Notifications />
    </div>
    <App />
  </>
, root);
