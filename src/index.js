import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <NotificationContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
